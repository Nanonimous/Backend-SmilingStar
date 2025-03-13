import axios from "axios";

export const getAllEnquiry = async (req,res)=>{
    try{
        const response = await axios.get("http://localhost:3000/Mc-1/get/enquiry");
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const postAllEnquiry = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        console.log(newEnquiry);
        const response = await axios.post("http://localhost:4000/Mc-1/post/enquiry",newEnquiry);
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}