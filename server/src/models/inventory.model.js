import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    businessId: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'Business',
        required: true
    },
    itemName: {
        type: String,   
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String

}}, { timestamps: true });

export const Inventory = mongoose.model('Inventory', inventorySchema);