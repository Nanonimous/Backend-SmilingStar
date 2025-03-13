import express from "express";
import enquiry from "./src/routers/post.routes.js"

const app = express();
app.use(express.json());


app.use('/Mc-1/post',enquiry)


export default app;