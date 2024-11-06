import express from "express";
import { addEmp, getAllEmp } from "../controller/userController.js";


const router=express.Router();

router.route('/emp')
.get(getAllEmp)
.post(addEmp)

export default router;