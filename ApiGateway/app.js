import express from "express";
import enquiry from "./src/routers/enquiry.routes.js"

const app = express();
app.use(express.json());


app.use('/api/enquiry',enquiry)


export default app;