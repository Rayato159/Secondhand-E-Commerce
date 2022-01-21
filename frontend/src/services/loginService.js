import axios from 'axios'

const userController = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
})

export const signin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await userController.post(`/signin`,{
                email,
                password
            })

            sessionStorage.setItem("accessToken", res.data.accessToken)

            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}