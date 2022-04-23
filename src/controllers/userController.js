const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const req = require("express/lib/request");

//solution 1
const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });

}
//solution 2
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Uranium",
      organisation: "FunctionUp",
    },
    "functionup-Uranium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};
//solution 3
const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];
  

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  
  try { 
    let decodedToken = jwt.verify(token, "functionup-Uranium");
  }
  catch(err){
    return res.send({ status: false, msg: "token is invalid" });
  }

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

//solution 4
const updateUser = async function (req, res) {


  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{userData}},{new:true});
  res.send({ status:userData ,  data: updatedUser });
};

//solution 5
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById({_id:userId});
  //Return an error if no user with the given id exists in db
  if(!user) {
    return res.send("No such user exists");
  }
  let userData = req.body
  let deleteUser = await userModel.findOneAndUpdate({ _id: userId}, {$set:{isDeleted:true}},{new:true});
  res.send({ status:userData , data: deleteUser})
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;