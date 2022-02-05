import axios from "axios";

const userController = axios.create({
    baseURL: 'http://localhost:3000/api/users'
})

const authController = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
})

export const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await authController.post('login', {
                email,
                password
            })

            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}