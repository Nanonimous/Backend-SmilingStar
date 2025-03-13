import express from "express";
import enquiry from "./src/routers/enquiry.routes.js"

const app = express();
app.use(express.json());


app.use('/Mc-2/enq_methods',enquiry)


export default app;