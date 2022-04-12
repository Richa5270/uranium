const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema ( {
    bookName : {
        type : String,
        require: true
    },
    authorName : String,
    category: { 
        type: String, 
        enum:
         ["Regional", "Social Science", "Technology"]
        },
        year: Number,
        emailId: String,
         
    },      

        { timestamps:true});

              
module.exports = mongoose.model('Book', bookSchema) //Books


