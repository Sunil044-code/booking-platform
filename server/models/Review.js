const mongoose=require('mongoose')

const ReviewSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    businessId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Business',
        required:true
    },
    comments:{
        type:String
    },
    rating:{
        type:Number,
        required:true
    }

},{timestamps:true})

modules.exports=mongoose.model("Review",ReviewSchema)