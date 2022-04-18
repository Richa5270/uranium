const mongoose = require('mongoose');

const batcheSchema = new mongoose.Schema( {
    
    name: String,
    program:{
        type:String,
        enum:['backend','frontend'],
    },
    size:Number
},
       { timestamps: true });

module.exports = mongoose.model('Batches', batcheSchema)