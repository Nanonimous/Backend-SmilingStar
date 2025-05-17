import express from "express";
import enquiry from "./src/routers/enquiry.routes.js"
import student from './src/routers/students.router.js';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors()); // This allows all origins
app.use('/api/stu_enq',enquiry)

export default app;