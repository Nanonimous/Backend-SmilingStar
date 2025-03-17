import express from 'express';
import authmiddleware from '../middlewares/authmiddleware.js';
import { getAllstudents,poststudent,deletestudent } from '../controllers/student.controller.js'

const router = express.Router(); 

router.get("/",getAllstudents)
router.post("/",poststudent)
router.delete("/",deletestudent)

export default router;