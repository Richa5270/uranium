const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const req = require("express/lib/request");

//solution 1
const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  }
  catch (err) {
    console.log("This is the error 1", err.massage)
    res.status(500).send({ msg: "Error", error:err.massage})
  }
}
  //solution 2
  const loginUser = async function (req, res) {
    try{
     let userName = req.body.emailId;
     let password = req.body.password;

     let user = await userModel.findOne({ emailId: userName, password: password });
     console.log(user)
     if (!user){
      return res.status(403).send("username or the password is not corerct");
      }
          let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Uranium",
        organisation: "FunctionUp",
      },
      "functionup-Uranium" //Secret key
     );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, data: token });
  }
  catch(err){
    console.log("This is the error:",err.massage)
    res.status(500).send({msg:"Error", error:err.massage})
  }  
};
  //solution 3
const getUserData = async function (req, res) {
  

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    console.log(userDetails)
    if (!userDetails){
     return res.status(403).send({ status: false, msg: "No such user exists" });
    }

     res.status(200).send({ status: true, data: userDetails });
  

};

  //solution 4
const updateUser = async function (req, res) {
    try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: {mobile:userData.mobile } }, { new: true });
    res.status(200).send({ status: userData, data: updatedUser });
  }
  catch (err) {
    console.log("This is the error 1", err.massage)
    res.status(500).send({ msg: "Error", error:err.massage})
  }
};

  //solution 5
const deleteUser = async function (req, res) {
    try{
    let userId = req.params.userId;
    let user = await userModel.findById({ _id: userId });
    //Return an error if no user with the given id exists in db
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let userData = req.body
    let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    res.status(200).send({ status: userData, data: deleteUser })
  }
  catch (err) {
    console.log("This is the error 1", err.massage)
    res.status(500).send({ msg: "Error", error:err.massage})
  }
}


  module.exports.createUser = createUser;
  module.exports.getUserData = getUserData;
  module.exports.updateUser = updateUser;
  module.exports.loginUser = loginUser;
  module.exports.deleteUser = deleteUser;