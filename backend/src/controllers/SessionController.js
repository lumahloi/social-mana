const connection = require('../database/connection')

module.exports = {
    async create (request, response) {
        const { email, password } = request.body

        const userInfo = await connection('users')
            .where('email', email)
            .select('id', 'name', 'password', 'picture')
            .first()

        if(!userInfo){
            return response.status(400).json({error: 'No account found with this email'})
        } else {
            if(password != userInfo.password){
                return response.status(400).json({error: 'Wrong password, try again'})
            }
        }

        const { id, name, picture } = userInfo

        return response.json({id, name, picture})
    }
}