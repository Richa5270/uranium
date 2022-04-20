const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController=require("../controllers/bookController")
const { handler } = require("../controllers/assignment")
const app = express();


app.get("/", (req, res) => {
    res.send("hello word from the server");
});

/*router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});*/

router.get ("/api1", handler);
router.get("/api2", handler);
router.get("/api3", handler)

router.post("/totalSalesPerAuthor",BookController.totalSalesPerAuthor)

router.post("/createNewAuthor",BookController.createNewAuthor)
router.post("/createNewBook",BookController.createNewBook)
router.get("/allBooks",BookController.allBooks)
router.get("/updatedBookPrice",BookController.updatedBookPrice)
router.get("/authorName",BookController.authorsName)





module.exports = router;

