import mongoose from "mongoose"

const DB_NAME = "blogApp"

const connectDB = async() =>{
    try {
        const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! DB host : ${connetionInstance.connection.host}`)
    } catch (error) {
          console.log('error when connect data base ' , error)
          process.exit(1)
    }
}

export default connectDB

