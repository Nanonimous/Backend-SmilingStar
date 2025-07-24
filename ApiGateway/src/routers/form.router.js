import express from "express";


import { submitEnquiry } from "../controllers/form.controller.js"
const router = express.Router(); 

router.post("/",submitEnquiry)

export default router;