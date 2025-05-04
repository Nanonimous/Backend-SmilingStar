import express from "express";

import {postMul,deleteMul,patchMul} from "../controllers/mulmethods.controller.js"
const router = express.Router(); 

router.post("/:prog/:tb",postMul);
router.patch("/:prog/:tb",patchMul);
router.delete("/:prog/:tb",deleteMul);

export default router;