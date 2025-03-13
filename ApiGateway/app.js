import express from 'express';

import jwt from 'jsonwebtoken'


const app = express();
const PORT = 3000;
const SECRET_KEY = 'supersecretkey';

app.use(express.json());




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
app.use('/read', verifyToken, (req, res, next) => readServiceProxy(req, res, next));
app.use('/write', verifyToken, (req, res, next) => writeServiceProxy(req, res, next));




app.listen(PORT, () => {
    console.log(`🚀 API Gateway running on http://localhost:${PORT}`);
});


export default app;