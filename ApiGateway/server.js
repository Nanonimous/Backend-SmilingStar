const { Client } = require('pg');
const bcrypt = require('bcrypt');
const express = require('express');

const app = express();
const PORT = 3000;

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'mass',
    port: 5432,
});

db.connect()
  .then(() => console.log('✅ Connected to PostgreSQL successfully!'))
  .catch((err) => console.error('❌ Connection error:', err.stack));


  
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
