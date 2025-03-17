import express from "express";
import mainmethods from "./src/routers/mainmethods.routes.js"
import mulmethods from "./src/routers/mulmethods.routes.js"

const app = express();
app.use(express.json());


app.use('/Mc-2/methods',mainmethods)
app.use('/Mc-2/methods/multiple',mulmethods)


export default app;