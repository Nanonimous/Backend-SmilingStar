import express from "express";

import {postMul,deleteMul} from "../controllers/mulmethods.controller.js"
const router = express.Router(); 

router.post("/:prog/:tb",postMul);
router.delete("/:prog/:tb",deleteMul);

export default router;