var express = require('express');
const checktoken = require ('../middelware/checktoken.middelware')
const validate=require('../middelware/student.validacation.middelwar')
let router=express.Router();
const InstiuteControllers = require('../controllers/Instiute.controllers ');

router.get('/',InstiuteControllers.getAllInstiute)
router.post('/updateInstiutebyid/:id',InstiuteControllers.updateInstiutebyid)
router.post('/getbyid/:id',InstiuteControllers.getInstiutebyid)
router.post('/create',validate.InsertInstiuteApi(),InstiuteControllers.insertInstiute)
 

router.post('/deleteid/:id',InstiuteControllers.deleteInstiute) 
module.exports=router;


