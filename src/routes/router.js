const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController=require("../controllers/bookController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});







router.post("/bookpost",BookController.bookPostController)
router.get("/booklist",BookController.bookGetController)
router.get("/listbookyear",BookController.bookyearlist) 
router.get("/ParticularBooks",BookController.particularBooklist)
router.get("/INRBooks",BookController.IndianBook)
router.get("/randomBooks",BookController.randomBook)


module.exports = router;

