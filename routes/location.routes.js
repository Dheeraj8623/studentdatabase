var express = require('express');
const checktoken = require ('../middelware/checktoken.middelware')
const validate=require('../middelware/student.validacation.middelwar')
let router=express.Router();
const locationControllers = require('../controllers/location.controllers');

router.get('/',locationControllers.getAlllocation)
router.post('/updatelocationbyid/:id',locationControllers.updatelocationbyid)
router.post('/getbyid/:id',locationControllers.getlocationbyid)
router.post('/create',validate.InsertlocationApi(),locationControllers.Insertlocation)
 

router.post('/deleteid/:id',locationControllers.deletelocation) 
module.exports=router;


