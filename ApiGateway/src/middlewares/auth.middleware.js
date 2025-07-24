import jwt from "jsonwebtoken";

// Use environment variable (Make sure .env is properly configured)
const SECRET_KEY = process.env.JWT_SECRET;

const AuthMiddleware = (req, res, next) => {
  const token = req.cookies?.token; // Optional chaining for safety
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

export default AuthMiddleware;
