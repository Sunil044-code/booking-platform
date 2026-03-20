import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
        default:'user'
    }

},{timestamps:true});

//hashing password before saving to database
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

//compare password for login

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

export const User=mongoose.model('User', userSchema);