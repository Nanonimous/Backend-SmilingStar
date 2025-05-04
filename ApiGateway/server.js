import dotenv from "dotenv";
import app from "./app.js";
import cors from "cors";
dotenv.config();


// OR customize it:

//listerning 
app.listen(process.env.PORT,()=>{
    console.log("Api gate way is running successfully in the port ", process.env.PORT);
})
