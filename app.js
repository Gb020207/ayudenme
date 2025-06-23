import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.DB_NAME)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DIALECT)
console.log(process.env.DB_USER)
import express from 'express';
import initDB from './config/db.js';
initDB();
const app = express();
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => res.json({ ok:'true'}));
app.use(express.json());
app.use(productRoutes);
app.listen(PORT, () => console.log("Server andando " + PORT))
