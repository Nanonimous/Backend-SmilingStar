import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const microSer2 = process.env.MICROSERVICE_2;


export const loginUser = async(req,res) =>{
        try{
            let userCred = req.body;
            const response = await axios.post(`${microSer2}Mc-2/login`,userCred);
            res.cookie("token", response.data.token, {
                httpOnly: true,
                secure: false,          // true if using HTTPS in production
                sameSite: "Lax",        // Or 'None' if using cross-origin
                maxAge: 3600 * 1000,    // 1 hour
                });
            res.status(200).json({ message: "Login successful" });
        }catch(err){    
        res.status(500).json({ message: 'Failed to fetch products' });
        }
}

export const verifyUser = async(req,res) =>{
    res.status(200).json({ valid: true, user: req.user });
}