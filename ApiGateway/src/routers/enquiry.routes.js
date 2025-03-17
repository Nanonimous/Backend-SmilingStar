import express from "express";


import {getAllEnquiry, postAllEnquiry, deleteAllEnquiry, postOneEnquiry, deleteOneEnquiry} from "../controllers/enquiry.controller.js"
const router = express.Router(); 

router.get("/:td",getAllEnquiry)
router.post("/multi/:td",postAllEnquiry)
router.post("/:td",postOneEnquiry)
router.delete("/:td",deleteOneEnquiry)
router.delete("/multi/:td",deleteAllEnquiry)

export default router;