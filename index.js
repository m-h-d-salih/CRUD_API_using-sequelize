import express from "express";
import { connection } from "./postgres/postgres.js";
import router from "./src/views/routes.js";

const app=express();

app.use(router)




const PORT=8000;
app.listen(PORT,()=>console.log(`server running on ${PORT}`))

connection();