const mongoose=require ("mongoose");

const BusinessSchema=new mongoose.Schema({   
   ownerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
    
   },
   name:{
    type:String,
    required:true
   },
   location:{
    type:String,
    required:true
   },
   category:{
    type:String,
    required:true
   },
   description:{
    type:String
   },
   rating:{
    type:Number,
    default:0
   }
},{timestamps:true});

module.exports=mongoose.model('Business',BusinessSchema);