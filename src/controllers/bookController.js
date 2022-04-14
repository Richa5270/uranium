const bookModel = require("../models/bookModel")



//post Data create problem 1 completed
const createBook = async function (req, res) {
    let data= req.body
    let savedData = await bookModel.create(data)
    res.send({msg: savedData})
};



// Problem 2 completed
const booklist= async function(req,res){
    let data =req.body
    let alldata= await bookModel.find().select({bookName: 1, authorName: 1, _id: 0}) //selected key that we want
    res.send({alldata})
};

// Problem 3 completed
const listbookyear= async function(req,res){

    let yearList= await bookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
    res.send(yearList)

};

//problem 4 completed
const ParticularBooks= async function(req,res){
    
        let specificBooks = await bookModel.find(req.body)
        res.send({msg:specificBooks})
    
};

//problem 5 completed

const INRBooks= async function(req,res){
    let alldata= await bookModel.find({"price.IndianPrice":{$in:["100INR","200INR","500INR"] }}).select({bookName: 1, _id: 0})
    res.send({alldata})
};

//Problem 6 completed

const randomBooks= async function(req,res){
    let alldata= await bookModel.find({$or: [{stockAvailable: true }, {totalPages: {$gt: 500}} ] }).select({bookName: 1, _id: 0})
    res.send({alldata})
};












module.exports.bookPostController=createBook;
module.exports.bookGetController=booklist;
module.exports.bookyearlist=listbookyear;
module.exports.particularBooklist=ParticularBooks;
module.exports.IndianBook=INRBooks;
module.exports.randomBook=randomBooks;







const mongoose = require('mongoose');