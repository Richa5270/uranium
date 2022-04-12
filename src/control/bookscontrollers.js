const bookModel = require('../BooksModol/bookModel')

const createBook = async function (req, res) {
    let data= req.body
    let savedData = await bookModel.create(data)
    res.send({msg: savedData})
}


const getBooksData= async function (req, res) {
    let allBooks = await bookModel.find()
    res.send({msg:allBooks})
}

module.exports.createBook=createBook
module.exports.getBooksData=getBooksData