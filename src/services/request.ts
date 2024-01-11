import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import Cookies from 'js-cookie'

export const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

client.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token')

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => Promise.reject(error),
)

client.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)
