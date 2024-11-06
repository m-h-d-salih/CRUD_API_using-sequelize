import express from "express";


const router=express.Router();

router.get('/',()=>{
    console.log(`hii`);
})

export default router;