import mongoose ,{Schema} from "mongoose";

const contentSchema = new  Schema( {

    content : {
        type : String ,
        required : true
    },
    owner : {
        type : Schema.Types.ObjectId ,
        ref : "User",
        required : true
    }

} ,{timestamps: "true"})

export const content = mongoose.model("content" , contentSchema) 
