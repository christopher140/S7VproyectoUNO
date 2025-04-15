import { Router } from "express";
import { LoginS7V } from "../Controllers/LoginController.js";


const LoginUser = Router()

LoginUser.post('/login',LoginS7V)

export default LoginUser;