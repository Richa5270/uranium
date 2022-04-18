const express = require('express');
const router = express.Router();

/*const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishercontroller=require("../controllers/publishercontroller")*/
const allcontroller=require("../controllers/allcontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", allcontroller.authorCreated  )

router.post("/createpublisher", allcontroller.publisherCreated)

router.post("/newBook", allcontroller.newBook)

router.get("/getBooksDetails", allcontroller.specificBook)

router.put("/updatekey", allcontroller.newupdateBooks)



module.exports = router;