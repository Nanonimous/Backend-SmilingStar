import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const microSer2 = process.env.MICROSERVICE_2;


export const submitEnquiry = async (req,res)=>{
    try{
        const newEnquiry = req.body;
        const response = await axios.post(`${microSer2}Mc-2/methods/daycare/enquiry`,newEnquiry);
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}
