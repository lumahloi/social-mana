import axios from 'axios'

const api = axios.create({
    //RAILWAY
    baseURL: 'https://social-mana-api-production.up.railway.app/',
    //LOCALHOST
    //baseURL: 'http://localhost:3333/'
})

export default api