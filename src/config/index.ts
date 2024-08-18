import dotenv from 'dotenv'
dotenv.config()
import process from 'process'
export default {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
}