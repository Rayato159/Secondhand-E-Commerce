import axios from "axios"

const userController = axios.create({
    baseURL: 'http://localhost:3000/api/products'
})

export const createProduct = ({
    product_name,
    price,
    description,
    address
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await userController.post(
                `/`,
                {
                    product_name,
                    price,
                    description,
                    address,
                },
                {
                    headers: {
                        "Authorization": `Bearer ${sessionStorage.getItem("accessToken")}`
                    }
                }
            )
            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

// export const updateProductImagePath = () => {
//     return new Promise(async (resolve, reject) => {
//         try {

//         } catch(e) {
//             reject(e.response.data)
//         }
//     })
// }