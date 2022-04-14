const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type:String,
        required: true
    },
    authorName:String,
    tags:[String],
    year:{
        type:Number,
        default:2021
    },
    category:String,
    prices:{
        indianPrice:String,
        europePrice:String,
    },
    totalPages:Number,
    StockAvailable:Boolean,
},   {timestamps: true});

module.exports=mongoose.model("book",bookSchema)