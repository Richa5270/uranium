const express = require('express');
const router = express.Router();


const batchescontroller=require("../controllers/batchescontroller")
const developercontroller=require("../controllers/developercontroller")



router.post("/batchesCreated",batchescontroller.batchesCreated)

router.post("/developercreated",developercontroller.developerCreated)

router.get("/developers",developercontroller.developers)

router.get("/filterDetail",developercontroller.filterDetail)




module.exports = router;