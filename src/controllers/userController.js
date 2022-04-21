const req = require("express/lib/request")
const userModel = require("../models/userModel")

//solution:-2
    //Write a POST api to create a user that takes user details from the request body. 
    //If the header isFreeAppUser is not present terminate the request response cycle with 
    //an error message that the request is missing a mandatory header

const createAUser = async function(req, res) {
    let newUS = req.body
    let headers  = req.headers
    let abc = req.headers['isfreeAppUser']
    if(!abc){
      let abc = headers['isfreeappuser']
      let abcFree = false
    if(abc == 'true') {
         abcFree = true
    }
      if(!abcFree){
          return res.send({status:false, msg: "The request is missing a mandatory header"})
      }
      let usercreate = await userModel.create(newUS)
      res.send(usercreate)
    }

}
    

module.exports.usercreate = createAUser





const createUS= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

module.exports.createUS=createUS


const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createAUser= createAUser
module.exports.getUsersData= getUsersData    