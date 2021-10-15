import Axios from 'axios'

export const BASE_URL = 'https://api.quotable.io/random'
const Client = Axios.get({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? `${window.location.origin}`
      : 'http://https://api.quotable.io/random:3001'
})

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers['authorization'] = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
