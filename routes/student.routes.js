var express = require('express');
const checktoken = require ('../middelware/checktoken.middelware')
const validate=require('../middelware/student.validacation.middelwar')

let router=express.Router();

let studentController=require('../controllers/student.controllers');

router.get('/',checktoken,studentController.getAllStudents)
router.post('/updatemobile/:id',checktoken,studentController.updateStudentMobile)
router.post('/getbyid/:id',checktoken,studentController.getbyid)
router.post('/create',validate.Insert(),studentController.createNewStudent)
 

router.post('/deleteid/:id',checktoken,studentController.deleteid) 
module.exports=router;


