import express from 'express';
import { verifyUser } from '../controllers/auth.controller.js'

const router = express.Router(); 

router.get("/",verifyUser);

export default router;