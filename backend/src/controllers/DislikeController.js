const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { postid } = request.params
        const userid = request.headers.authorization

        if(!postid || !userid){
            return response.status(401).json({error: 'Operation not permitted.'})
        } else {
            await connection('dislikes').insert({
                userid,
                postid
            })
            return response.json()
        }
    },

    async index(request, response) {
        const userid = request.headers.authorization;
        const { postid } = request.params;
    
        // Obtém a contagem de dislikes para o post
        const dislikeResult = await connection('dislikes')
            .where('postid', postid)
            .count()
            .first();
    
        // Verifica se o resultado foi encontrado
        if (dislikeResult != undefined) {
            // Ajusta o nome da chave de 'count(*)' para 'count'
            const dislike = {
                count: parseInt(dislikeResult['count(*)'], 10)
            };
    
            // Verifica se o usuário deu like no post
            const disliked = await connection('dislikes')
                .where('userid', userid)
                .where('postid', postid)
                .first();
    
            let jsonFinal;
    
            // Adiciona a informação de se o usuário deu like ou não
            if (disliked) {
                jsonFinal = { ...dislike, disliked: true };
            } else {
                jsonFinal = { ...dislike, disliked: false };
            }
            return response.status(200).json(jsonFinal);
        } else {
            return response.status(404).send();
        }
    },

    async delete(request, response){
        const userid = request.headers.authorization
        const { postid } = request.params

        const undislike = await connection('dislikes')
            .where('userid', userid)
            .where('postid', postid)
            .first()

        if(!undislike){
            return response.status(401).json({error: 'Operation not permitted.'})
        }

        await connection('dislikes').where('userid', userid).where('postid', postid).first().delete()

        return response.status(204).send()
    },

}