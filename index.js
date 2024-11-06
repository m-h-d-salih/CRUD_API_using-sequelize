import express from "express";
import { connection } from "./postgres/postgres.js";
import router from "./src/views/routes.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());

app.use('/api',router);




const PORT=8000;
app.listen(PORT,()=>console.log(`server running on ${PORT}`))

connection();