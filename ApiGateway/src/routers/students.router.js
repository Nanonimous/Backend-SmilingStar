import express from 'express';
import authmiddleware from '../middlewares/authmiddleware';
import { getAllstudents,poststudent,deletestudent } from '../controllers/student.controller'

const router = express.Router(); 

router.get("/",authmiddleware,getAllstudents)
router.post("/",authmiddleware,poststudent)
router.delete("/",authmiddleware,deletestudent)

export default router;