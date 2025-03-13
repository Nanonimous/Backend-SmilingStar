import pg from "pg";
import * as postIt from "../services/post.service.js"
export const postAll = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        const tb_Name = req.params.tb;
        const out = await postIt.postData(tb_Name,newEnquiry);
        res.status(200).json(out);
    }catch(err){
        console.log(err)
    }
    
}
