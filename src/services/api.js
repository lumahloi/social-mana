import axios from 'axios'
require('dotenv').config()

const api = axios.create({
    baseURL: 'https://social-mana-api-production.up.railway.app/'
})

export default api