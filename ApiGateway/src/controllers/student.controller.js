import axios from "axios";

export const getAllstudents = async(req,res)=>{
    try{
        const response = await axios.get("http://localhost:3000/Mc-1/get/students");
        res.status(200).json(response.data);
    }catch(err){
        res.status(501).json({message:err});
    }
}

export const poststudent = async(req,res)=>{
    const addstudent=req.body;
    console.log(req.body);
    try{
        const response = await axios.post("http://localhost:3000/Mc-2/post/students",addstudent);
        res.status(200).json(response.data);
    }catch(err){
        res.status(501).json({message:err});
    }
}
export const deletestudent = async(req,res)=>{
    const studentid=req.body;
    try{
        const response = await axios.delete("http://localhost:3000/Mc-2/delete/students",{data:studentid});
        res.status(200).json(response.data);
    }catch(err){
        res.status(501).json({message:err});
    }
}