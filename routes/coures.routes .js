var express = require('express');
const checktoken = require ('../middelware/checktoken.middelware')
const validate=require('../middelware/student.validacation.middelwar')
let router=express.Router();

const couresControllers = require('../controllers/coures.controllers ');

router.get('/',couresControllers.getAllcoures)
router.post('/updatecouresbyid/:id',couresControllers.updatecouresbyid)
router.post('/getbyid/:id',couresControllers.getcouresbyid)
router.post('/create',validate.InsertcouresApi(),couresControllers.insertcoures)
 

router.post('/deleteid/:id',couresControllers.deletecoures) 
module.exports=router;


