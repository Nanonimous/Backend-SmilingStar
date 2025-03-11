import axios from "axios";

export const getAllEnquiry = async (req,res)=>{
    try{
        const response = await axios.get("");
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}