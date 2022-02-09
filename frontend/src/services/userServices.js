import axios from "axios";

const userController = axios.create({
    baseURL: 'http://localhost:3000/api/users'
})

const authController = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
})

const accessToken = localStorage.getItem("accessToken")

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

export const registerNewUser = (
    {
        email,
        password,
        password_confirm,
        first_name,
        last_name,
        address,
        phone_number,
    }
) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post('http://localhost:3000/api/register',
                {
                    email,
                    password,
                    password_confirm,
                    first_name,
                    last_name,
                    address,
                    phone_number,
                },
                {
                    headers: { "Authorization": `Bearer ${accessToken}`}
                }
            )

            resolve(res.data)
        } catch(e) {
            reject(e.response.data)
        }
    })
}