import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BASEURL
})

export default api