import express from "express";


import {getAllEnquiry,postAllEnquiry,deleteAllEnq   uiry} from "../controllers/enquiry.controller.js"
const router = express.Router(); 

router.get("/:td",getAllEnquiry)
router.post("/:td",postAllEnquiry)
router.delete("/:td",deleteAllEnquiry)

export default router;