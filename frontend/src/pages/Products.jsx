import React, { useEffect } from 'react'

// Route
import { useSearchParams } from 'react-router-dom';

// Icons
import { ImSpinner8 } from 'react-icons/im'
import { ImFilesEmpty } from 'react-icons/im'

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
    { isProductsLoading, isProductsError, productsArray },
    { search },
    { isToken },
  ] = useSelector((state) => [
    state.products,
    state.search,
    state.login
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
    dispatch(productsSuccess(null))
    if(search) {
      fetchProducts(search)
    } else {
      fetchProducts(searchParams.get('search'))
    }
  }, [search, searchParams, isToken])

  return (
      <div className='mx-3'>
        {isProductsLoading &&
          <div className='flex justify-center'>
            <ImSpinner8 className='md:h-10 md:w-10 h-6 w-6 text-gray-500 animate-spin'/>
          </div>
        }
        {(productsArray && !isProductsLoading) &&
          productsArray.map((product) => {
            return (
              <ProductCard key={product.product_id} product={product} />
            )
          })
        }

        {isProductsError &&
          <div className='flex justify-center'>
            <div className='flex space-x-6'>
              <div>
                <ImFilesEmpty className='md:h-8 md:w-8 h-6 w-6'/>
              </div>
              <div className="flex flex-col space-y-2">
                <div className='md:text-3xl text-xl'>
                  {isProductsError}
                </div>
                <div className='text-md'>
                  Error, products are empty or something is worng.
                </div>
                <div className='flex space-x-2 text-md'>
                  <div>
                    Need help?
                  </div>
                  <div>
                    <a className='text-blue-400 hover:text-blue-700 underline underline-offset-2' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>http://www.help.mongsue.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
  )
}