import express from "express";

import {getAllEnquiry} from "../controllers/enquiry.controller.js"
const router = express.Router(); 

router.get("/",getAllEnquiry)
