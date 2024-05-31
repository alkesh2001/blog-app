import { User } from "../model/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"

export const verifyJWT = asyncHandler(async(req, res ,next)=>{
    try {

        const token = await req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer" , "")

        if(!token){
            return res
                   .status(401)
                   .json({message : "Unathorized request"})
        }

        const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id)

        if(!user){
            return res
                  .status(401)
                  .json({
                    message : "Invalid access Token"
                  })
        }

        req.user = user ;
        next()        
    } catch (error) {
        console.log("invalid token", error)
    }
})