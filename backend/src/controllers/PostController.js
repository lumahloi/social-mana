import createConnection from '../database/connection.js'
import { check } from './CheckController.js'

export const PostController = {
    async index(request, response) {
        const userid = request.headers.authorization

        if (!userid) {
            return response.status(400).json({ error: 'Operação não permitida.' })
        }

        let connection
        try {
            const userCheck = await check('users', 'id', userid)

            if (userCheck.length === 0) {
                return response.status(400).json({ error: 'Usuário não encontrado.' })
            }

            const page = parseInt(request.query.page, 10) || 1
            const offset = (page - 1) * 15
            const postQt = 15
            connection = await createConnection()

            // Contar o número total de posts
            const [countRows] = await connection.execute("SELECT COUNT(id) AS count FROM posts")
            const count = countRows[0].count

            // Pegar os posts com paginação
            const [posts] = await connection.execute(
                `SELECT P.id, P.description, P.userid, U.name, U.picture
                 FROM posts AS P
                 INNER JOIN users AS U ON P.userid = U.id
                 ORDER BY P.id DESC
                 LIMIT ${postQt} OFFSET ${offset}` // Inserir diretamente os valores de LIMIT e OFFSET
            )

            response.header('X-Total-Count', count)
            return response.json(posts)
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error: 'Erro no servidor, tente novamente mais tarde.' })
        } finally {
            if (connection) await connection.end()
        }
    },

    async create(request, response) {
        const { description } = request.body
        const userid = request.headers.authorization

        if (!userid || !description) {
            return response.status(400).json({ message: 'Operação não permitida.' })
        }

        if (description.trim().length === 0) {
            return response.status(400).json({ message: 'Insira caracteres válidos.' })
        }

        let connection
        try {
            const userCheck = await check('users', 'id', userid)

            if (userCheck.length == 0) {
                return response.status(400).json({ error: 'Usuário não encontrado.' })
            }

            connection = await createConnection()
            await connection.execute("INSERT INTO posts (description, userid) VALUES (?, ?)", [description, userid])
            return response.status(200).json({ message: 'Post criado com sucesso.' })
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error: 'Erro no servidor, tente novamente mais tarde.' })
        } finally {
            if (connection) await connection.end()
        }
    },

    async delete(request, response) {
        const { id } = request.params
        const userid = request.headers.authorization

        if (!id || !userid) {
            return response.status(400).json({ error: 'Operação não permitida.' })
        }

        let connection
        try {
            const userCheck = await check('users', 'id', userid)
            const postCheck = await check('posts', 'id', id)

            if (userCheck.length == 0) {
                return response.status(400).json({ error: 'Usuário não encontrado.' })
            }

            if (postCheck.length == 0) {
                return response.status(400).json({ error: 'Post não encontrado.' })
            }

            if (postCheck[0].userid !== userid) {
                return response.status(403).json({ error: 'Permissão negada.' })
            }

            connection = await createConnection()
            await connection.execute("DELETE FROM likes WHERE postid = ?", [id]);
            await connection.execute("DELETE FROM dislikes WHERE postid = ?", [id]);
            await connection.execute("DELETE FROM posts WHERE id = ?", [id])

            return response.status(200).json({ message: 'Post deletado com sucesso.' })
        } catch (error) {
            console.error(error)
            return response.status(500).json({ error: 'Erro no servidor, tente novamente mais tarde.' })
        } finally {
            if (connection) await connection.end()
        }
    }
}
