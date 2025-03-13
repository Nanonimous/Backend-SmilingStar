import express from "express";
import enquiry from "./src/routers/enquiry.routes.js"

const app = express();
app.use(express.json());


app.use('/api/enquiry',enquiry)

function verifyToken(req, res, next) {
    console.log(req.rawHeaders[15].split("=")[1]);
    
    const token=req.rawHeaders[15].split("=")[1];
    
  //  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log(decoded);
        
        req.user = decoded;
        console.log( req.user);
        
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Forbidden' });
    }
}

app.get('/',verifyToken,async(req,res)=>{
    console.log("helo");
    
})

export default app;