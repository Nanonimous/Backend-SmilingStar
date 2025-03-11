import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

//listerning 
app.listen(process.env.PORT,()=>{
    console.log("Api gate way is running successfully in the port ", process.env.PORT);
})