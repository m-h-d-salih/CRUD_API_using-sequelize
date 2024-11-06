import { DataTypes } from "sequelize";

export const createUserModel=async(sequelize)=>{
    const User=sequelize.define('User',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        designation:{
            type:DataTypes.STRING,
            allowNull:false
        },
        empId:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
    });
    return User;
}