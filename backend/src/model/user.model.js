import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new Schema({
    
    username :{
        type : String ,
        lowercase : true ,
        required : true ,
        unique : true,
    },
    fullName : {
        type : String , 
        lowercase : true ,
        required : true ,
        unique : true
    },
    email : {
        type : String ,
        lowercase : true ,
        required : true ,
        unique : true
    },
    password : {
        type : String ,
        required : true
    }

} , {timestamps : true})


userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id : this._id ,
            email : this.email ,
            username : this.username ,
            fullName : this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}





export const User = mongoose.model("User" , userSchema)