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

import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Replace with your actual secret key

const authmiddleware = (req, res, next) => {
    try {


        console.log(req.rawHeaders[15].split("=")[1]);
    
        const token=req.rawHeaders[15].split("=")[1];
        // // Extract token from cookies or headers
        // const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: Token not found' });
        }

        // Verify the token
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Attach the decoded payload to the request object

        console.log('✅ Token verified:', decoded);
        next(); // Proceed to the next middleware or route handler

    } catch (error) {
        console.error('❌ Token verification failed:', error.message);
        return res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
    }
};

export default authmiddleware;
