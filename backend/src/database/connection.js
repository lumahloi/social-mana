import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      port: process.env.MYSQLPORT,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
    });
    return connection
  } catch (err) {
    console.error('Error connecting to the database:', err)
    throw err
  }
};

export default createConnection
