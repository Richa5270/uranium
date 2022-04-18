const mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema= new mongoose.Schema({
    
    name:String,
    
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    
     batch_Id:{
         type:ObjectId,
         ref:'Batches'
        },
        percentage:Number,
    
}, { timestamps: true });

module.exports = mongoose.model('Developers', developerSchema)