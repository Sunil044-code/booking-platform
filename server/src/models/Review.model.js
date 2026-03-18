import mongoose from "mongoose"


const reviewSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true
  },

  rating: {
    type: Number,
    required: true
  },

  comment: {
    type: String
  }

}, { timestamps: true })

export const Review=mongoose.model("Review Schema",reviewSchema)