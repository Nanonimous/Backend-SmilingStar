import pkg from 'pg';
const { Client } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const db = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });


  
db.connect()
.then(() => console.log('✅ Connected to PostgreSQL successfully!'))
.catch((err) => console.error('❌ Connection error:', err.stack));

export default db;
