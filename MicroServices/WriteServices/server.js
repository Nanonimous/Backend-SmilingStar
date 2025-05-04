import dotenv from 'dotenv';
import { db1, db2, db3, db4 } from './src/config/db.js';
import app from "./app.js";
import express from "express";
import cors from "cors";
dotenv.config();

  
app.use(express.json());
// OR customize it:
app.use(cors({
  origin: 'http://localhost:5000', // allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`);
});
