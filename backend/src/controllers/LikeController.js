
const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { postid } = request.params
        const userid = request.headers.authorization

        console.log('USER ID NA MERDA DO BACK: ' + userid)

        if(!postid || !userid){
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
    },

    async count(request, response){
        const { postid } = request.params

        const likesQt = await connection('likes').where('postid', postid).count().first()
        return response.json(likesQt)
    }
}