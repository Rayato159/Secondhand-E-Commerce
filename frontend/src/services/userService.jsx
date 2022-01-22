import axios from 'axios'

const userController = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
})

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