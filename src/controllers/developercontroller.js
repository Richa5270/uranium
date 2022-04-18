const batchesModul = require("../models/batches")
const developerModel = require("../models/developer")

const developerCreated= async function (req, res) {
    let data = req.body
    let savedData = await developerModel.create(data)
    res.send(savedData)
}
 
const developers =async function (req, res) {
     let alldeveloper = await developerModel.find({percentage:{$gte:70}, gender:"female" })
     res.send(alldeveloper)
}

const filterDetail = async function(req, res) {

    let detail= await batchesModul.find({name:req.query.name}).select({_id:1})
    //console.log("detail: ",detail)

const filterdetail= await developerModel.find({percentage:{$gte:req.query.percentage}, batch_Id: detail}).populate("batch_Id")
//console.log(filterDetail)

res.send(filterdetail)
}


module.exports.filterDetail=filterDetail
module.exports.developers=developers 
module.exports.developerCreated=developerCreated
