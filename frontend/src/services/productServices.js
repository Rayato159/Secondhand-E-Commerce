import axios from 'axios'

const baseURL = 'http://localhost:3000/api/'

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
            const res = await productPhotosController.post(`product-photos/uploads/${product_id}`,
                formData,
                {
                    headers: { 
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "multipart/form-data",
                    }
                }
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
            const res = await axios.get(`${baseURL}products${search? `?search=${search}`: ""}`)
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}