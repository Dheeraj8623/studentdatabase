
const connection =require('./mysql.connection');
const bcrypt=require("bcrypt");
const { validationResult } = require('express-validator')

let getAllcoures =(req, res,next)=>{
    connection.query(`SELECT * FROM  tbl_course`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        res.send({error:false,data:result});
        
      }
    })
    
}
let getcouresbyid=(req, res,next)=>{
  
  //console.log(token);
    connection.query(`SELECT  Course_Id, Course_Name, Coures_Duration, Coures_Mode FROM tbl_course  WHERE Course_Id='${req.params.id}'`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        res.send({error:false,data:result});
        
      }
    })

  }
  let updatecouresbyid=(req, res,next)=>{
    let  Course_Name=req.body.Course_Name;
    let Coures_Duration=req.body.Coures_Duration;
    let Coures_Mode=req.body.Coures_Mode;
    let qry= `UPDATE tbl_course SET  Course_Name='${Course_Name}',Coures_Duration='${Coures_Duration}',Coures_Mode='${Coures_Mode}' WHERE Course_Id = ${req.params.id} `
    connection.query(qry,(err, result)=>{
      if(err) { console.log(err);
      }else if(result.affectedRows>0){
      res.send({err:false, message:"recored update sucessfully",data:result[0]})
      }
    })
  }
  

    

  let deletecoures =(req, res,next)=>{
    connection.query(`DELETE FROM tbl_course WHERE Course_Id =${req.params.id}`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        if(result.affectedRows>0){
        res.send({error:false,message:"coures id  sucessfully delete"});
        }else{
          res.send({error:false,message:"coures id not  delete "});
        }
      }
    })
    
}
let insertcoures=(req, res,next)=>{
  
  let  Course_Name=req.body.Course_Name;
  let Coures_Duration=req.body.Coures_Duration;
  let Coures_Mode=req.body.Coures_Mode;

     const errors = validationResult(req);
         if (!errors.isEmpty()) {return res.status(400).json({ errors: errors.array()});}
         else {
                     
let qry = `INSERT INTO tbl_course(Course_Name,Coures_Duration,Coures_Mode) VALUES ('${Course_Name}','${Coures_Duration}','${Coures_Mode}')`;
 
  connection.query(qry,(err, result)=>{
    if(err) { console.log(err);
    }else if(result.affectedRows>0){
    res.send({err:false, message:"recored Inserted sucessfully"})
    }
  })
}
}
module.exports={
    getAllcoures:getAllcoures,
    insertcoures:insertcoures,
    updatecouresbyid:updatecouresbyid,
    getcouresbyid:getcouresbyid,
    deletecoures:deletecoures
}