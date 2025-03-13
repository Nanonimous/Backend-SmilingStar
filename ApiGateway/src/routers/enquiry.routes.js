import express from "express";

import {getAllEnquiry,postAllEnquiry} from "../controllers/enquiry.controller.js"
const router = express.Router(); 

router.get("/",getAllEnquiry)
router.post("/",postAllEnquiry)
router.delete("/",deleteAllEnquiry)

export default router;