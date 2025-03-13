import pg from "pg";
import * as getIt from "../services/get.service.js"
export const getAll = async (req,res)=>{
    try{
        const tb_Name = req.params.tb;
        const out = await getIt.fetchData(tb_Name);
        res.status(200).json(out);
    }catch(err){
        console.log(err)
    }
    
}
