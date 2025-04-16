import { Router } from "express";
import { UserRegister } from "../Controllers/UsersController.js";



const RouterUsers = Router()

RouterUsers.post('/register', UserRegister)

export default RouterUsers