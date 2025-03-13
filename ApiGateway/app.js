import express from "express";
import enquiry from "./src/routers/enquiry.routes.js"
import student from './src/routers/students.router.js';


const app = express();
app.use(express.json());


app.use('/api/stu_enq',enquiry)


export default app;