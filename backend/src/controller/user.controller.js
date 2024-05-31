import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../model/user.model.js";


const generateToken = async (userId) =>{
   try {
        
    if(!userId){
        throw new Error("user ID is required")
    }

    const user = await User.findById(userId)

    if(!user){
        throw new Error("user not found")
    }

    const accessToken = user.generateAccessToken()
    
    await user.save({validateBeforeSave : false})

    return {accessToken}

   } catch (error) {
      console.log("error when generate access token" , error)
   }
}

const registerUser = asyncHandler(async(req, res )=>{
    const {username , fullName , email , password} = req.body
   
    if([username , fullName , password , email ].some((field)=> field?.trim() === "")){
        return res
              .status(400)
              .json({messsage : "alll field are required"})
    }

    const existedUser = await User.findOne({
        $or : [{email} , {username}]
    })

    if(existedUser) {
        return res
               .status(404)
               .json({message : "user already existed "})
    }

    const user = await User.create({
        fullName , 
        username ,
        email ,
        password
    })

    console.log(user)

    const userId = user._id 

    const { accessToken} = await generateToken(userId)
  
    return res
          .status(200)
          .json({
            user ,
            accessToken ,
            message : "user Registered successfully"
          })
})

const loginUser = asyncHandler(async(req, res)=>{
    const {email  , password } = req.body 
    
    if(!email){
        return res
              .status(400)
              .json({
                message : " email is required"
              })
    }

    const user = await  User.findOne({email})

    if(!user){
        return res
              .status(404)
              .json({
                message : "user does not exist"
              })
    }

    if(user.password !== password){
        return res
              .status(401)
              .json({
                message : "Invalid user password"
              })
    }

    const userId = user._id

    const {accessToken} = await generateToken(userId)

    const loggedInUser = await User.findById(userId)

    const optiones ={
        httpOnly : true ,
        secure : true
    }

    return res
          .status(200)
          .cookie("accessToken" , accessToken , optiones)
          .json({
            user : loggedInUser , accessToken ,
            message : "user Logged In successfully"
          })

})

const logOutUser = asyncHandler(async(req , res)=>{
      User.findByIdAndUpdate(
        req.user._id ,
        {
            $set:{
                accessToken : 1
            }
        },
        {
            new : true
        }
      )

      const optiones ={
        httpOnly : true ,
        secure : true
      }


      return res
            .status(200)
            .clearCookie("accessToken" , optiones)
            .json({message : "user logged out seccessfully"})
});

const getCurrentUser = asyncHandler(async(req,res)=>{
       
    try { 
        const user = req.user ;
        console.log(user)
        
        return res
               .status(200)
               .json({user ,message : "current user fetched successfully" })

    } catch (error) {
      res.status(500).json({message :" internal server error" , error}  )
    } 

})


export {
    registerUser,
    loginUser,
    logOutUser, 
    getCurrentUser
}

