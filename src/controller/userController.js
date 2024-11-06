import { UserModel } from "../../postgres/postgres.js"

export const getAllEmp=async(req,res)=>{
    try {
        const users=await UserModel.findAll();
        if(users.length===0) return res.status(200).json({message:`users not found`,data:[]})
         res.status(200).json({message:`users found successfully`,data:users})
    } catch (error) {
        return res.status(500).json({message:`internel server error ${error.message}`})
    }
}
export const addEmp=async(req,res)=>{
    const {empId}=req.body;
    try {
        const existEmp=await UserModel.findOne({where:{empId}});
        if(existEmp)return res.status(400).json({message:`user already exist`});
        const user=await UserModel.create(req.body);
        return res.status(200).json({message:`user created successfully`,data:user})

       
    } catch (error) {
        return res.status(500).json({message:`internel server error ${error.message}`})
    }
}