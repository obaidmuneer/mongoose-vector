import "dotenv/config"
const DB_URI = process.env.DB_URI
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

if (!DB_URI) throw new Error('DB_URI is not missing')
if (!OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is not missing')

export { DB_URI, OPENAI_API_KEY }