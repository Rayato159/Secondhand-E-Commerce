import React, { useEffect } from 'react'

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

  // Redux State
  const dispatch = useDispatch()
  const [
    { isProductsLoading, productsArray },
    { search, category },
  ] = useSelector((state) => [
    state.products,
    state.search
  ])

  // Function
  const fetchProducts = async (search, category) => {
    dispatch(productsLoading())
    try {
      const res = await getProducts(search, category)
      dispatch(productsSuccess(res))
    } catch(e) {
      dispatch(productsFail(e.message))
    }
  }

  useEffect(() => {
    fetchProducts(search, category)
  }, [search])

  console.log(productsArray)

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