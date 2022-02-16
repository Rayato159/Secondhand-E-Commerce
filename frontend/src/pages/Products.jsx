import React, { useEffect } from 'react'

// Route
import { useSearchParams } from 'react-router-dom';

// Icons
import { ImSpinner8 } from 'react-icons/im'

// Services
import { getProducts } from '../services/productServices'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { productsLoading, productsSuccess, productsFail } from '../features/productsSlice'

// Components
import { ProductCard } from '../components/products/ProductCard'

export const Products = () => {

  // Search Params
  const [searchParams] = useSearchParams()

  // Redux State
  const dispatch = useDispatch()
  const [
    { isProductsLoading, productsArray },
    { search },
  ] = useSelector((state) => [
    state.products,
    state.search
  ])

  // Function
  const fetchProducts = async (search) => {
    dispatch(productsLoading())
    try {
      const res = await getProducts(search)
      dispatch(productsSuccess(res))
    } catch(e) {
      dispatch(productsFail(e.message))
    }
  }

  useEffect(() => {
    fetchProducts(search)
  }, [search])

  return (
      <div>
        {isProductsLoading &&
          <div className='flex justify-center'>
            <ImSpinner8 className='md:h-10 md:w-10 h-6 w-6 text-gray-500 animate-spin'/>
          </div>
        }
        {(productsArray && !isProductsLoading) &&
          productsArray.map((product) => {
            return (
              <ProductCard product={product} />
            )
          })
        }
      </div>
  )
}