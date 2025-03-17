import axios from "axios";

export const getAllEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        const response = await axios.get(`http://localhost:3000/Mc-1/get/${tableName}`);
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const postOneEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        console.log(tableName)
        const newEnquiry = req.body;
        console.log(newEnquiry);
        const response = await axios.post(`http://localhost:4000/Mc-2/methods/${tableName}`,newEnquiry);
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
        console.log(newEnquiry);
        const response = await axios.post(`http://localhost:4000/Mc-2/methods/multiple/${tableName}`,newEnquiry);
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const deleteOneEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        const newEnquiry = req.body;
        console.log(newEnquiry)
        const response = await axios.delete(`http://localhost:4000/Mc-2/methods/${tableName}`,{data:newEnquiry});
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}

export const deleteAllEnquiry = async (req,res)=>{
    try{
        const tableName = req.params.td;
        const newEnquiry = req.body;
        console.log(newEnquiry)
        const response = await axios.delete(`http://localhost:4000/Mc-2/methods/multiple/${tableName}`,{data:newEnquiry});
        res.status(200).json(response.data);
    }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
    }
}