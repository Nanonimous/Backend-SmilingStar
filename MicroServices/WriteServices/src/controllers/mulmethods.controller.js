import * as postIt from "../services/mulmethods.service.js"

export const postMul = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        const tb_Name = req.params.tb;
        const out = await postIt.postMulData(tb_Name,newEnquiry.id);
        res.status(200).json(out);
    }catch(err){
        console.log(err)
    }
    
}

export const deleteMul = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        console.log(req.body)
        const tb_Name = req.params.tb;
        const out = await postIt.deleteMulData(tb_Name,newEnquiry.id);
        res.status(200).json(out);
    }catch(err){
        console.log(err)
    }
    
}
