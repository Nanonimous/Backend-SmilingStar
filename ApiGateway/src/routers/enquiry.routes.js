import express from "express";


import {getAllEnquiry, postAllEnquiry, deleteAllEnquiry, postOneEnquiry, deleteOneEnquiry} from "../controllers/enquiry.controller.js"
const router = express.Router(); 

router.get("/:prog/:td",getAllEnquiry)
router.post("/:prog/multi/:td",postAllEnquiry)
router.post("/:prog/:td",postOneEnquiry)
router.delete("/:prog/:td",deleteOneEnquiry)
router.delete("/:prog/multi/:td",deleteAllEnquiry)

export default router;