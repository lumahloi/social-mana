import createConnection from '../database/connection.js'
import { check } from './CheckController.js'
import bcrypt from 'bcryptjs'

export const SessionController = {
    async create(request, response) {
        const { email, password } = request.body

        if (!email || !password) {
            return response.status(400).json({ error: 'E-mail e senha são obrigatórios.' })
        }

        let connection
        try {
            connection = await createConnection()

            // Verificar se o e-mail está registrado
            const userInfo = await check('users', 'email', email)

            if (userInfo.length === 0) {
                return response.status(400).json({ error: 'E-mail não encontrado.' })
            }

            const isPasswordValid = await bcrypt.compare(password, userInfo[0].password)

            if (!isPasswordValid) {
                return response.status(400).json({ error: 'Senha inválida, tente novamente.' })
            }

            // Retornar as informações do usuário
            const { id, name, picture } = userInfo[0]
            return response.json({ id, name, picture })

        } catch (error) {
            console.error(error)
            return response.status(500).json({ error: 'Erro no servidor, tente novamente mais tarde.' })
        } finally {
            if (connection) {
                await connection.end()
            }
        }
    },
}
