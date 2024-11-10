import { Router } from "express";
import { fetchData } from "../controllers/userController";
const router=Router();

router.get("/fetchData",fetchData);


export default router;