import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
        minLength:4,
        maxLength:10
        

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:7,
        maxLength:16
    },
    role:{
        type:String,
        enum:['user','business','admin'],
        default:"User"
    }

},{timestamps:true});

export const User=mongoose.model("User Schema",userSchema)