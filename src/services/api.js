import axios from 'axios'

const api = axios.create({
    baseURL: 'https://social-mana-api-production.up.railway.app/',
})

export default api