import dotenv from 'dotenv'
dotenv.config();
console.log(process.env.DB_NAME)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DIALECT)
console.log(process.env.DB_USER)

