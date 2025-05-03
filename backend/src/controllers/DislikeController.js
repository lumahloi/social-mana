import createConnection from '../database/connection.js'
import { check } from './CheckController.js'

export const DislikeController = {
    async index(request, response) {
        const userid = request.headers.authorization
        const { postid } = request.params

        if (!userid || !postid) {
            return response.status(400).json("Operação não permitida.")
        }

        let connection
        try {
            connection = await createConnection()

            // Verificar se usuário e post existem
            const userCheck = await check('users', 'id', userid)
            const postCheck = await check('posts', 'id', postid)

            if (userCheck.length != 0 && postCheck.length != 0) {
                // Contar dislikes
                const [dislikeCountRows] = await connection.execute(
                    "SELECT COUNT(id) AS count FROM dislikes WHERE postid = ?", [postid]
                )
                const count = dislikeCountRows[0]['count']

                // Verificar se o usuário já deu dislike
                const [dislikedRows] = await connection.execute(
                    "SELECT id FROM dislikes WHERE userid = ? AND postid = ?", [userid, postid]
                )
                
                const disliked = dislikedRows.length > 0
                return response.status(200).json({ count, disliked })
            } else {
                return response.status(400).json({ error: 'Usuário ou post não encontrado.' })
            }
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error: 'Erro no servidor, tente novamente mais tarde.' })
        } finally {
            if (connection) await connection.end()
        }
    },

    async create(request, response) {
        const { postid } = request.params
        const userid = request.headers.authorization

        if (!postid || !userid) {
            return response.status(400).json({ error: 'Operação não permitida.' })
        }

        let connection
        try {
            connection = await createConnection()

            // Verificar usuário e post
            const userCheck = await check('users', 'id', userid)
            const postCheck = await check('posts', 'id', postid)

            if (userCheck.length != 0 && postCheck.length != 0) {
                // Verificar se o usuário já deu dislike
                const [dislikeRows] = await connection.execute(
                    "SELECT * FROM dislikes WHERE postid = ? AND userid = ?", [postid, userid]
                )

                if (!dislikeRows.length) {
                    // Verificar se o usuário deu like
                    const [likeRows] = await connection.execute(
                        "SELECT * FROM likes WHERE postid = ? AND userid = ?", [postid, userid]
                    )

                    if (!likeRows.length) {
                        await connection.execute(
                            "INSERT INTO dislikes (postid, userid) VALUES (?, ?)", [postid, userid]
                        )
                        return response.status(200).json({ message: 'Dado dislike no post com sucesso.' })
                    } else {
                        return response.status(400).json({ error: 'Operação não permitida. Já existe um like.' })
                    }
                } else {
                    return response.status(400).json({ error: 'Operação não permitida. Já existe um dislike.' })
                }
            } else {
                return response.status(400).json({ error: 'Usuário ou post não encontrado.' })
            }
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error: 'Erro no servidor, tente novamente mais tarde.' })
        } finally {
            if (connection) await connection.end()
        }
    },

    async delete(request, response) {
        const userid = request.headers.authorization
        const { postid } = request.params

        if (!postid || !userid) {
            return response.status(400).json({ error: 'Operação não permitida.' })
        }

        let connection
        try {
            connection = await createConnection()

            // Verificar usuário e post
            const userCheck = await check('users', 'id', userid)
            const postCheck = await check('posts', 'id', postid)

            if (userCheck.length != 0 && postCheck.length != 0) {
                // Verificar se o usuário deu dislike
                const [dislikeRows] = await connection.execute(
                    "SELECT * FROM dislikes WHERE userid = ? AND postid = ?", [userid, postid]
                )

                if (dislikeRows.length > 0) {
                    await connection.execute(
                        "DELETE FROM dislikes WHERE postid = ? AND userid = ?", [postid, userid]
                    )
                    return response.status(200).json({ message: 'Dislike deletado com sucesso.' })
                } else {
                    return response.status(400).json({ error: 'Dislike não encontrado.' })
                }
            } else {
                return response.status(400).json({ error: 'Usuário ou post não encontrado.' })
            }
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error: 'Erro no servidor, tente novamente mais tarde.' })
        } finally {
            if (connection) await connection.end()
        }
    }
}
