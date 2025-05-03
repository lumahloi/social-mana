import createConnection from '../database/connection.js'

// Função para garantir que o nome da tabela e coluna sejam válidos
const validateIdentifier = (identifier) => {
    // Verifica se o nome da tabela/coluna contém apenas letras, números e underscores
    if (!/^[a-zA-Z0-9_]+$/.test(identifier)) {
        throw new Error('Identificador inválido para tabela ou coluna.')
    }
}

export const check = async (tableName, columnName, columnInfo) => {
    let connection
    try {
        // Validação dos identificadores
        validateIdentifier(tableName)
        validateIdentifier(columnName)

        connection = await createConnection()
        const query = `SELECT * FROM ${tableName} WHERE ${columnName} = ?`
        const [rows] = await connection.execute(query, [columnInfo])
        return rows
    } catch (error) {
        throw new Error('Erro ao executar a consulta: ' + error.message)
    } finally {
        if (connection) {
            await connection.end()
        }
    }
}
