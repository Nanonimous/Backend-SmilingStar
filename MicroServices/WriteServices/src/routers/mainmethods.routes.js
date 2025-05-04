import express from "express";

import {postAll,deleteAll,patchAll} from "../controllers/mainmethods.controller.js"
const router = express.Router(); 

router.post("/:prog/:tb",postAll);
router.patch("/:prog/:tb",patchAll);
router.delete("/:prog/:tb",deleteAll);

export default router;