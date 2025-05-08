import express from "express";

import {postAll,deleteAll} from "../controllers/mainmethods.controller.js"
const router = express.Router(); 

router.post("/:prog/:tb",postAll);
router.delete("/:prog/:tb",deleteAll);

export default router;