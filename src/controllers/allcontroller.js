const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


//solution 1
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send( authorCreated)
}

//solution 2
const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send( publisherCreated)
}

//solution 3
const newBook = async function (req, res) {
    let data = req.body
    let authorId = await authorModel.find({ _id:data.author_Id})
    if(authorId.length>0) {
        let publisherId = await publisherModel.find({_id:data.publisher_Id})
        if(publisherId.length>0) {
            let newCreateBook = await bookModel.create(data)
            res.send(newCreateBook)
        }
        else{
            res.send("publisherId not match")
        }
    }
    else{
        res.send("authorId not match")
    }
  }


  /*or

  const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    //3 a)
    if(!authorId) {
        return res.send({message: "Author id must be present in the book detials"})   
    }

    //3 b)
    let author = await authorModel.findById(authorId)

    if(!author) {
        return res.send({message: "Not a valid author id"})
    }

    //3 c)
    if(!publisherId) {
        return res.send({message: "Publihser id must be present in the book details"})
    }

    //3 d)
    let publisher = await publisherModel.findById(publisherId) 

    if(!publisher) {
        return res.send({message: "Not a valid publisher id"})
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}*/
  
//solution 4
const getBooksDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_Id','publisher_Id'])
    res.send(specificBook)
}

//solution 5
const updatekey = async function (req, res) {
    let BookDatils = await bookModel.updateMany({ isHardCover:false})
    console.log(BookDatils)
    let publis = await publisherModel.find({$or:[{publishername:'Penguin'},{publishername:'HarperCollins'}]  }).select({_id:1}) 
      console.log(publis)
    let abcd = await bookModel.updateMany({publisher_Id:publis},{isHardCover:true})
    console.log(abcd)
    let newupdatebook = await bookModel.find()
    res.send(newupdatebook)
}
 /*or
const updateBooks = async function (req, res) {
    // update hardcover to true for few books
    let hardCOverPublishers = await publisherModel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
    let arrayOfPublishers = []
    
    for (let i = 0; i < hardCOverPublishers.length; i++) {
        let objId = hardCOverPublishers[i]._id 
        arrayOfPublishers.push(objId)
    }
    
    let books = await bookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})

    res.send({data: books})
}
 */



//solution5
const updateprice = async function (req, res) {
    let abc = await authorModel.find({rating:{$gte:3.5} }).select({_id:1})
    let updatePricebook= await bookModel.updateMany({author_Id: abc},{$inc:{price: 10 }})
    let updatebookData = await bookModel.find()
    res.send(updatebookData)
}








module.exports.authorCreated=createAuthor
module.exports.publisherCreated= createpublisher
module.exports.newBook = newBook
module.exports.specificBook=getBooksDetails
module.exports.newupdateBooks = updatekey
module.exports.updateprice=updateprice