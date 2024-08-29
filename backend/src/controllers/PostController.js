const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query

        const [ count ] = await connection('posts').count()

        const posts = await connection('posts')
            .join('users', 'users.id', '=', 'posts.userid')
            .limit(9)
            .offset((page - 1) * 9)
            .select(['posts.*', 'users.name', 'users.picture'])
            .orderBy('id', 'desc')
        
        response.header('X-Total-Count', count['count(*)'])

        return response.json(posts)
    },

    async create(request, response) {
        const { description } = request.body
        const userid = request.headers.authorization
        const dislikes = null

        const [ id ] = await connection('posts').insert({
            description,
            dislikes,
            userid
        })

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const userid = request.headers.authorization

        const post = await connection('posts')
            .where('id', id)
            .select('userid')
            .first()

        if(post.userid != userid){
            return response.status(401).json({error: 'Operation not permitted.'})
        }

        await connection('posts').where('id', id).delete()

        return response.status(204).send()
    }
}