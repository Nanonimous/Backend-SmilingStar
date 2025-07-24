import express from "express";
import enquiryRoutes from "./src/routers/enquiry.routes.js";
import authRoutes from "./src/routers/auth.router.js";
import cors from "cors";
import cookieParser from "cookie-parser"; // Needed to read cookies
import dotenv from "dotenv";
import AuthMiddleware from "./src/middlewares/auth.middleware.js";
import verifyRoute from "./src/routers/verify.router.js";
import formRoutes from "./src/routers/form.router.js";

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS setup for multiple allowed origins
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"], // Add other frontend URLs here
  credentials: true,
}));

// Routes
app.use('/api/stu_enq',AuthMiddleware, enquiryRoutes);         // Protected route (you can add AuthMiddleware if needed)
app.use('/api/login', authRoutes);              // Auth route (no auth middleware)
app.use('/api/enquiryForm', formRoutes);    
app.use('/api/verify', AuthMiddleware, verifyRoute);
export default app;
