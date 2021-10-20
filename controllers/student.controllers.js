
const connection =require('./mysql.connection');
const bcrypt=require("bcrypt");
const { validationResult } = require('express-validator')

let getAllStudents=(req, res,next)=>{
    connection.query(`SELECT id, Name, Email, Mobile, Age FROM student `,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        res.send({error:false,data:result});
        
      }
    })
    
}
let getbyid=(req, res,next)=>{
  
  //console.log(token);
    connection.query(`SELECT id, Name, Email, Mobile, Age FROM student where id='${req.params.id}'`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        res.send({error:false,data:result});
        
      }
    })

  } 
  let updateStudentsMobile=(req, res,next)=>{
      connection.query(`UPDATE student SET Mobile= '${req.body.Mobile}' WHERE id=${req.params.id}`,(err, result)=>{
        if(err) {
          console.log(err);
        }else{
          if(result.affectedRows>0){
          res.send({error:false,message:"Mobile number updated sucessfully"});
          }else{
            res.send({error:false,message:"Mobile number not updated "});
          }
        }
      })
      
  }
  let deleteid =(req, res,next)=>{
    connection.query(`DELETE FROM student WHERE id=${req.params.id}`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        if(result.affectedRows>0){
        res.send({error:false,message:"student id  sucessfully delete"});
        }else{
          res.send({error:false,message:"student id not  delete "});
        }
      }
    })
    
}
let createNewStudent=async(req, res,next)=>{
  
  let Name=req.body.Name;
  let Email=req.body.Email;
  let Mobile=req.body.Mobile;
  let age=req.body.age;
  let password=req.body.password;
     const errors = validationResult(req);
         if (!errors.isEmpty()) {return res.status(400).json({ errors: errors.array()});}
         else {
             
 
  const salt = await bcrypt.genSalt(10);
const hashpassword =await bcrypt.hash(password, salt)
console.log(hashpassword);
let qry = `INSERT INTO student(id, Name, Email, Mobile, age, password) VALUES  ('0','${Name}','${Email}','${Mobile}','${age}','${hashpassword}')`;
 
  connection.query(qry,(err, result)=>{
    if(err) {
     
      res.send({error:true, message:"Record not added due to some duplicated key"})
    }else{
      
      (result.affectedRows>0)?res.send({error:false,message:"new recored added"}):
      res.send({error:true,message:"error found,recored not added"});

    }
  })
}
}
module.exports={
    getAllStudents:getAllStudents,
    createNewStudent:createNewStudent,
    updateStudentMobile:updateStudentsMobile,
    getbyid:getbyid,
    deleteid:deleteid
    
}