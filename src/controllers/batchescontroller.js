const batchesModel= require("../models/batches")



const batchesCreated= async function (req, res) {
    let data= req.body
    let savedData= await batchesModel.create(data)
    res.send(savedData)
};







module.exports.batchesCreated=batchesCreated