const connection = require('../database/connection')

module.exports = {
    async create (request, response) {
        const { email, password } = request.body

        const userInfo = await connection('users')
            .where('email', email)
            .select('password')
            .first()

        if(!userInfo){
            return response.status(400).json({error: 'No account found with this email'})
        } else {
            if(password != userInfo.password){
                return response.status(400).json({error: 'Wrong password, try again'})
            }
        }

        return response.json()
    }
}