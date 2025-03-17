import express from "express";

import {postMul,deleteMul} from "../controllers/mulmethods.controller.js"
const router = express.Router(); 

router.post("/:tb",postMul);
router.delete("/:tb",deleteMul);

export default router;