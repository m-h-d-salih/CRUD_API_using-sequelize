import express from "express";
import { getAllEmp } from "../controller/userController.js";


const router=express.Router();

router.get('/getall',getAllEmp)

export default router;