import express from "express";

import {getAll} from "../controllers/get.controller.js"
const router = express.Router(); 

router.get("/:tb",getAll);



export default router;