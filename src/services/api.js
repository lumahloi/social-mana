import axios from 'axios'
require('dotenv').config()

const api = axios.create({
    baseURL: process.env.BASEURL
})

export default api