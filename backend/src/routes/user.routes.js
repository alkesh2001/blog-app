import { Router } from "express";
import { getCurrentUser, logOutUser, loginUser, registerUser } from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";


const router = Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

 
//  secure routes 

router.route('/logout').post(verifyJWT,logOutUser)
router.route("/getCurrentUser").get(verifyJWT , getCurrentUser)
export default router