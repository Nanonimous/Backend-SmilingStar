import express from "express";


import {getAllEnquiry, postAllEnquiry, deleteAllEnquiry, postOneEnquiry, deleteOneEnquiry} from "../controllers/enquiry.controller.js"
const router = express.Router(); 

router.get("/:prog/:td",getAllEnquiry)
router.post("/multi/:prog/:td",postAllEnquiry)
router.post("/:prog/:td",postOneEnquiry)
router.delete("/:prog/:td",deleteOneEnquiry)
router.delete("/multi/:prog/:td",deleteAllEnquiry)

export default router;