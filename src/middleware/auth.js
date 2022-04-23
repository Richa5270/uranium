const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")
//solution 6
const validationToken = function(req, res, next) {
    let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];
    if(!token){
        return res.send({status: false, msg:"token must be not present"});
    }
    console.log(token);
    let decodedToken=jwt.verify(token, "functionup-Uranium");

    if(!decodedToken) {
        return res.send({status : false, msg:"toke is invalid"})
    }
    next()
}
       
//solution 7

const authoriseToKen = async function(req, res , next){
    let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];
    if(!token){return res.send({status:false, msg:"token must be present in the request header"})}
    try { 
        var decodedToken = jwt.verify(token, "functionup-Uranium");
      }
      catch(err){
        return res.send({ status: false, msg: "token is invalid" });
      }
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if(!userToBeModified == userLoggedIn) {return res.send({status:false, msg: "User logged is not allowed"})}
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg:"No such user exits"})
    
    next()
}

module.exports.validationToken=validationToken
module.exports.authoriseToKen=authoriseToKen