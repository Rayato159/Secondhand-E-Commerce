import axios from 'axios'

const productPhotosController = axios.create({
    baseURL: 'http://localhost:3000/api/product-photos'
})

const productsController = axios.create({
    baseURL: 'http://localhost:3000/api/products'
})

const accessToken = localStorage.getItem("accessToken")

export const createProduct = ({ title, description, price, category }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await productsController.post('create', 
                {
                    title,
                    description,
                    price,
                    category
                }, 
                {
                    headers: { "Authorization": `Bearer ${accessToken}` }
                }
            )
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const uploadProductPhotos = (product_id, images) => {

    // Stack images into array form
    let formData = new FormData()
    for(let i=0; i<images.length; i++) {
        formData.append(`images`, images[i])
    }

    return new Promise(async (resolve, reject) => {
        try {
            const res = await productPhotosController.post(`uploads/${product_id}`,
                formData,
                { headers: { "Authorization": `Bearer ${accessToken}` } }
            )
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const getProducts = (search) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await productsController.get(`?search=${search? `${search}`: ""}${localStorage.getItem("user_id")? `&user_id=${localStorage.getItem("user_id")}`: ``}`)
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const getProductById = (product_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await productsController.get(`${product_id}`)
            const photos = await productPhotosController.get(`${product_id}`)
            resolve({ ...product.data, photos: photos.data })
        } catch(e) {
            reject(e.response.data)
        }
    })
}