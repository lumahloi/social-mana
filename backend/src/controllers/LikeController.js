
const { json } = require('express')
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
        const { postid } = request.params

        const like = await connection('likes')
            .where('postid', postid)
            .count()
            .first()

        if(like){
            const liked = await connection('likes')
                .where('userid', userid)
                .where('postid', postid)
                .first()

            let jsonFinal

            if(liked) {
                jsonFinal = Object.assign(like, {liked: true})
            } else {
                jsonFinal = Object.assign(like, {liked: false})
            }

            return response.status(200).json(jsonFinal)
        } else {
            alert('Post não encontrado')
            return response.status(404)
        }
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

}