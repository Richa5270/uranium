const express = require('express');
const router = express.Router();
const productController = require("../controllers/productcontroller")
const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const mid1 = require("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


 router.post("/usercreate",  UserController.createAUser  )
 router.post("/createAproduct", productController.createAproduct)
 router.post("/orderpurcharchase",orderController.orderpurcharchase)

 router.post("/createUS", mid1.mid1, UserController.createUS)

router.post('/create-a-user', UserController.createAUser)


module.exports = router;