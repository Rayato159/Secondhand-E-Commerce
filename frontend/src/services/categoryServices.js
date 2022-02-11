import axios from "axios"

const categoryController = axios.create({
    baseURL: 'http://localhost:3000/api/categories'
})

export const getCategories = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await categoryController('select')
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}