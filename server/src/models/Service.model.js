import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({

  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
    required: true
  },

  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  price: {
    type: Number,
    required: true
  },

  duration: {
    type: Number,
    required: true
  }

}, { timestamps: true })

export const Service=mongoose.model("Service Schema",serviceSchema)