const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController=require("../controllers/bookController")



/*router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});*/







router.post("/createNewAuthor",BookController.createNewAuthor)
router.post("/createNewBook",BookController.createNewBook)
router.get("/allBooks",BookController.allBooks)
router.get("/updatedBookPrice",BookController.updatedBookPrice)
router.get("/authorName",BookController.authorsName)





module.exports = router;

