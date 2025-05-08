import dotenv from 'dotenv';
import { db1, db2, db3, db4 } from './src/config/db.js';
import app from "./app.js";
import express from "express";
dotenv.config();

  
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
});
