
const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const userid = request.headers.authorization
        const { postid } = request.params

        //Checar se o usuário já deu like no mesmo post anteriormente
        const check = await connection('likes')
            .where('userid', userid)
            .where('postid', postid)
            .first()

        if(!postid || !userid || check){
            return response.status(401).json({error: 'Operation not permitted.'})
        } else {
            await connection('likes').insert({
                userid,
                postid
            })

            return response.json()
        }
    },

    async index(request, response){
        const allLikes = await connection('likes').select('*')
        return response.json(allLikes)
    },

    async delete(request, response){
        const userid = request.headers.authorization
        const { postid } = request.params

        const unlike = await connection('likes')
            .where('userid', userid)
            .where('postid', postid)
            .first()

        if(!unlike){
            return response.status(401).json({error: 'Operation not permitted.'})
        }

        await connection('likes').where('userid', userid).where('postid', postid).first().delete()

        return response.status(204).send()
    }
}