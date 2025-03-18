import pg from "pg";
import * as postIt from "../services/mainmethods.service.js"

export const postAll = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        const tb_Name = req.params.tb;
        const progName = req.params.prog;
        const out = await postIt.postwData(progName,tb_Name,newEnquiry.id);
        res.status(200).json(out);
    }catch(err){
        console.log(err)
    }
    
}

export const deleteAll = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        const tb_Name = req.params.tb;
        const progName = req.params.prog;
        const out = await postIt.deleteData(progName,tb_Name,newEnquiry.id);
        res.status(200).json(out);
    }catch(err){
        console.log(err)
    }
    
}
