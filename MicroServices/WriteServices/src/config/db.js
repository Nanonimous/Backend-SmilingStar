import pkg from 'pg';
const { Client } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const db1 = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE1,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
const db2 = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE2,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
const db3 = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE3,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
const db4 = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE4,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const db5 = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE5,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const db6 = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE6,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const db7 = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE7,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

  
Promise.all([db1.connect(), db2.connect(), db3.connect(), db4.connect(),db5.connect(),db6.connect(),db7.connect()])
  .then(() => console.log('✅ All databases connected successfully!'))
  .catch((err) => console.error('❌ Connection error:', err.stack));

// Export all databases as an object
export { db1, db2, db3, db4 ,db5,db6,db7};
