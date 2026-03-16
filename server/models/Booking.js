const mongoose=require ("mongoose");

const BookingSchema=new mongoose.Schema({   
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
   },
   businessId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Business',
    required:true
   },
   serviceId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Service',
    required:true
   },
   status:{
    type:String,
    enum:['pending','confirmed','cancelled','confirmed'],
    default:'pending'

   },
   date:{
    type:String,
    required:true

   },
   time:{
    type:String,
    required:true
   }
},{timestamps:true});


bookingSchema.index(
  { businessId: 1, date: 1, time: 1 },
  { unique: true }
)

module.exports=monogose.model("Booking",BookingSchema);