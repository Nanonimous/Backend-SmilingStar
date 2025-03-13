import express from "express";
import enquiry from "./src/routers/get.routes.js"

const app = express();
app.use(express.json());


app.use('/Mc-1/get',enquiry)


export default app;