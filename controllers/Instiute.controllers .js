
const connection =require('./mysql.connection');
const bcrypt=require("bcrypt");
const { validationResult } = require('express-validator')

let getAllInstiute =(req, res,next)=>{
    connection.query(`SELECT * FROM  tbl_instiute`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        res.send({error:false,data:result});
        
      }
    })
    
}
let getInstiutebyid=(req, res,next)=>{
  
  //console.log(token);
    connection.query(`SELECT Inst_id,Inst_Name,Inst_Type, FROM tbl_instiute  WHERE Inst_id='${req.params.id}'`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        res.send({error:false,data:result});
        
      }
    })

  }
  let updateInstiutebyid=(req, res,next)=>{
    let  Inst_Name=req.body.Inst_Name;
    let Inst_Type=req.body.Inst_Type;
    let qry= `UPDATE tbl_instiute SET Inst_Name='${Inst_Name}',Inst_Type='${Inst_Type}' WHERE Inst_id = ${req.params.id} `
    connection.query(qry,(err, result)=>{
      if(err) { console.log(err);
      }else if(result.affectedRows>0){
      res.send({err:false, message:"recored update sucessfully",data:result[0]})
      }
    })
  }
  

    

  let deleteInstiute =(req, res,next)=>{
    connection.query(`DELETE FROM tbl_instiute WHERE Inst_id =${req.params.id}`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        if(result.affectedRows>0){
        res.send({error:false,message:"instiute id  sucessfully delete"});
        }else{
          res.send({error:false,message:"instiute id not  delete "});
        }
      }
    })
    
}
let insertInstiute=(req, res,next)=>{
  
  let  Inst_Name=req.body.Inst_Name;
  let Inst_Type=req.body.Inst_Type;

     const errors = validationResult(req);
         if (!errors.isEmpty()) {return res.status(400).json({ errors: errors.array()});}
         else {
                     
let qry = `INSERT INTO tbl_instiute(Inst_Name, Inst_Type) VALUES ('${Inst_Name}','${Inst_Type}')`;
 
  connection.query(qry,(err, result)=>{
    if(err) { console.log(err);
    }else if(result.affectedRows>0){
    res.send({err:false, message:"recored Inserted sucessfully"})
    }
  })
}
}
module.exports={
    getAllInstiute:getAllInstiute,
    insertInstiute:insertInstiute,
    updateInstiutebyid:updateInstiutebyid,
    getInstiutebyid:getInstiutebyid,
    deleteInstiute:deleteInstiute
}