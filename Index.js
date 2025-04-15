import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import RouterUsers from "./src/Routes/UserRoutes.js";
import LoginUser from "./src/Routes/LoginRouters.js";

const S7V = express()
const PORT = process.env.PORT || 5000;



dotenv.config()



S7V.use(cors())
S7V.use(express.json())

S7V.use('/users', RouterUsers)
S7V.use(LoginUser)

S7V.listen(PORT, ()=>{
    console.log("Servidor corriendo");
})