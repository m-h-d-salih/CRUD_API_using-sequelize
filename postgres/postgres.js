import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { createUserModel } from "../src/model/userSchema.js";

dotenv.config();

const sequelize = new Sequelize('postgres', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres' 
  });
  let UserModel=null;
  const connection=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel=await createUserModel(sequelize);
        await sequelize.sync();
        console.log(`Database synced`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  export{
    connection,
    UserModel
  }