const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const OrderSchema = new mongoose.Schema( {
    // Write the schema content

    userId:{
        type:ObjectId,
        ref:'User',
        trim:true
    },
    productId:{
        type:ObjectId,
        ref:'Product',
        trim:true
    },
    amount:Number,
    isFreeAppUser:Boolean,
    dateAdded: {
        type: Date, 
        default: Date.now },

}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema) //Order
