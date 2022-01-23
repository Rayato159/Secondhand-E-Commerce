import axios from 'axios'

const userController = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
})

export const signup = ({
    first_name,
    last_name,
    email,
    phone,
    password,
    passwordConfirm,
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await userController.post(`/signup`, {
                first_name,
                last_name,
                email,
                phone,
                password,
                passwordConfirm,
            })

            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}

export const getUserButMe = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await userController.get(`/users/me`,
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