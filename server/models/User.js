const moongose=require ("mongoose");

const UserSchema=new moongose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true

    },
    phone:{
        type:Int,

    },
    role:{
        type:String,
        enum:['customer','businessOwner','admin'],
        default:"customer"
        }
    
        
},{timestamps:true});

module.exports=moongose.model("User",UserSchema);