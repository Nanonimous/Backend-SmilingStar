import express from "express";

import {postAll,deleteAll} from "../controllers/enquiry.controller.js"
const router = express.Router(); 

router.post("/:tb",postAll);
router.delete("/:tb",deleteAll);

export default router;