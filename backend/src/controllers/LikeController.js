
const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { postid } = request.params
        const userid = request.headers.authorization

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
        const userid = request.headers.authorization
        const postid = request.headers.item

        const like = await connection('likes')
            .where('userid', userid)
            .where('postid', postid)
            .first()
        if(like){
            return response.status(200).json(like)
        } else {
            return response.status(404).json({error: 'Like not found.'})
        }
    },

    async delete(request, response){
        const userid = request.headers.authorization
        const { postid } = request.params
        console.log('userid: ' + userid + ' postid: ' + postid)

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