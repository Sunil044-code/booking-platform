import { User } from './models/User.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
//Create User Register

const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Ok'})
})