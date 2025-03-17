import pg from "pg";
import * as getIt from "../services/get.service.js"
export const getAll = async (req,res)=>{
    try{
        const tb_Name = req.params.tb;
        if(req.query.getdate){
            const getDate = req.query.getdate;
            const out = await getIt.fetchConDataPay(tb_Name,getDate);
            res.status(200).json(out);
        }
        if(req.query.month && req.query.year){
            const getMonth = req.query.month;
            const getYear = req.query.year;
            const out = await getIt.fetchConDataAtt(tb_Name,getMonth,getYear);
            res.status(200).json(out);
        }

        const out = await getIt.fetchNoConData(tb_Name);
        res.status(200).json(out);
        
        
    }catch(err){
        console.log(err)
    }
    
}
