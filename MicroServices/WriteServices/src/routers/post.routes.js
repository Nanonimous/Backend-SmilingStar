import express from "express";

import {postAll} from "../controllers/post.controller.js"
const router = express.Router(); 

router.post("/:tb",postAll);

export default router;