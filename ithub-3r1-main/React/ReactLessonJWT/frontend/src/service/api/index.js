import axios from 'axios'

export const BASE_URL = 'http://localhost:4420'

export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(
    async(config) => {
        const token = JSON.parse(localStorage.getItem('token'))?.accessToken
        config.headers.Authorization = `Bearer ${token}`
        return config
    },
    () => 'error'
)