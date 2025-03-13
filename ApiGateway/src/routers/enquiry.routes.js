import express from "express";

import authmiddleware from '../middlewares/authmiddleware.js';

import {getAllEnquiry,postAllEnquiry,deleteAllEnquiry} from "../controllers/enquiry.controller.js"
const router = express.Router(); 

router.get("/",authmiddleware,getAllEnquiry)
router.post("/",authmiddleware,postAllEnquiry)
router.delete("/",authmiddleware,deleteAllEnquiry)

export default router;