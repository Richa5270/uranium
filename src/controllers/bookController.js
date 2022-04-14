const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")



//problem 1

const createNewAuthor = async function(req, res){
    const reqAuthor = req.body;
    const saved = await authorModel.create(reqAuthor)
    res.send({msg: saved})
};


//problem 2

const createNewBook =async function(req, res){
    const reqBook = req.body;
    const saved = await bookModel.create(reqBook)
    res.send({msg:saved})
};


//problem 3
const allBooks = async function(req, res){
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    console.log(authorDetails)
    const id = authorDetails[0].author_id
    const booksName = await bookModel.find({author_id: id}).select({Name:1})
    res.send({msg:booksName})
};



//problem 4
const updatedBookPrice = async function(req, res){
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})

    //const bkName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:"Two states"}, {price:100},{new:true}).select({price:1, _id:0})

    res.send({msg:authorN, updatedPrice})

};




//problem 5
const authorsName = async function(req, res){
    const booksID = await bookModel.find({price:{$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksID.map(inp => inp.author_id)

    let temp=[]
    for(let i=0; i<id.length;i++){
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1,_id:0})
        temp.push(author)
    }

   const authorName = temp.flat()

  res.send({msg:authorName})
};


//Today
module.exports.createNewAuthor=createNewAuthor
module.exports.createNewBook=createNewBook
module.exports.allBooks=allBooks
module.exports.updatedBookPrice=updatedBookPrice
module.exports.authorsName=authorsName