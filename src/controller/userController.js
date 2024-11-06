import { UserModel } from "../../postgres/postgres.js"

export const getAllEmp=async(req,res)=>{
    try {
        const users=await UserModel.findAll();
        if(users.length===0) return res.status(200).json({message:`user not found`,data:[]})
         res.status(200).json({message:`user not found`,data:users})
    } catch (error) {
        return res.status(500).json({message:`internel server error ${error.message}`})
    }
}