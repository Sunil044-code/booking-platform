import mongoose from 'mongoose'

const businessSchema=new mongoose.Schema({
    businesId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
    name:{
        type:String,
        required:true
    },

  category: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  location: {
    type: String,
    required: true
  },

  phone: {
    type: String
  },

  rating: {
    type: Number,
    default: 0
  }

}, { timestamps: true })

export const Business=mongoose.model("Business Schema",businessSchema)