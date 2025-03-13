import pg from "pg";
import * as postIt from "../services/enquiry.service.js"

export const postAll = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        const tb_Name = req.params.tb;
        console.log(tb_Name)
        console.log(newEnquiry)
        const out = await postIt.postData(tb_Name,newEnquiry);
        res.status(200).json(out);
    }catch(err){
        console.log(err)
    }
    
}

export const deleteAll = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        console.log(req.body)
        const tb_Name = req.params.tb;
        const out = await postIt.deleteData(tb_Name,newEnquiry.id);
        res.status(200).json(out);
    }catch(err){
        console.log(err)
    }
    
}
