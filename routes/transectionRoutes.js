const express = require("express");
const { addTransection, getAllTransection , editTransection , deleteTransection } = require("../controllers/transectionCtrl");



//router object
const router = express.Router();

//routes
//add Transection  POST Method
router.post("/add-transection", addTransection);
//Edit Transection  POST Method
router.post("/edit-transection", editTransection);
//Delete Transection  POST Method
router.post("/delete-transection", deleteTransection);


//get transections
router.post("/get-transection", getAllTransection);

module.exports = router;
