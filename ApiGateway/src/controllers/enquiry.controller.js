import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const microSer1 = process.env.MICROSERVICE_1;
const microSer2 = process.env.MICROSERVICE_2;

export const getAllEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        const progName = req.params.prog;
        console.log(tableName,progName)
        if (req.query.pMonth && req.query.pYear) {
            const response = await axios.get(`${microSer1}Mc-1/get/${progName}/${tableName}?getMonth=${req.query.pMonth}&getYear=${req.query.pYear}`);
            res.status(200).json(response.data);
        }else if (req.query.aMonth && req.query.aYear && req.query.aDate) {
            
            const response = await axios.get(`${microSer1}Mc-1/get/${progName}/${tableName}?year=${req.query.aYear}&date=${req.query.aDate}&month=${req.query.aMonth}`);
            res.status(200).json(response.data);
        }else if(req.query.pstudId){
            const response = await axios.get(`${microSer1}Mc-1/get/${progName}/${tableName}?studId=${req.query.pstudId}`);
            res.status(200).json(response.data);
        } 
        else if(req.query.areciptMon){
            console.log(req.query.areciptMon)
            const response = await axios.get(`${microSer1}Mc-1/get/${progName}/${tableName}?reciptMon=${req.query.areciptMon}`);
            res.status(200).json(response.data);
        }else{
            const response = await axios.get(`${microSer1}Mc-1/get/${progName}/${tableName}`);
            res.status(200).json(response.data);
        }
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const postOneEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        console.log(tableName)
        const newEnquiry = req.body;
        const progName = req.params.prog;
        console.log(newEnquiry);
        const response = await axios.post(`${microSer2}Mc-2/methods/${progName}/${tableName}`,newEnquiry);
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const postAllEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        console.log(tableName)
        const newEnquiry = req.body;
        const progName = req.params.prog;
        console.log(newEnquiry);
        const response = await axios.post(`${microSer2}Mc-2/methods/multiple/${progName}/${tableName}`,newEnquiry);
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const patchOneEnquiry = async (req,res)=>{
    try{
        console.log("came to patch request")
        const tableName = req.params.td;
        console.log(tableName)
        const newEnquiry = req.body;
        const progName = req.params.prog;
        console.log(newEnquiry);
        const response = await axios.patch(`${microSer2}Mc-2/methods/${progName}/${tableName}`,newEnquiry);
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const patchAllEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        console.log(tableName)
        const newEnquiry = req.body;
        const progName = req.params.prog;
        console.log(newEnquiry);
        const response = await axios.patch(`${microSer2}Mc-2/methods/multiple/${progName}/${tableName}`,newEnquiry);
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}



export const deleteOneEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        const newEnquiry = req.body;
        const progName = req.params.prog;
        const ids = req.query.id;
        console.log(newEnquiry)
        const response = await axios.delete(`${microSer2}Mc-2/methods/${progName}/${tableName}`,{data:{
            "id" : ids
        }});
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const deleteAllEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        const newEnquiry = req.body;
        const progName = req.params.prog;
        console.log(req.body.id)
        const response = await axios.delete(`${microSer2}Mc-2/methods/multiple/${progName}/${tableName}`,{data:newEnquiry});
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}