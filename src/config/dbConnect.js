import mongoose from "mongoose";
import {} from 'dotenv/config';

const conexao = process.env.MONGO_URI;

mongoose.connect(conexao);
let db = mongoose.connection;

export default db;