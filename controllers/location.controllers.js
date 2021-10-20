
const connection =require('./mysql.connection');
const bcrypt=require("bcrypt");
const { validationResult } = require('express-validator')

let getAlllocation=(req, res,next)=>{
    connection.query(`SELECT * FROM  tbl_location`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        res.send({error:false,data:result});
        
      }
    })
    
}
let getlocationbyid=(req, res,next)=>{
  
  //console.log(token);
    connection.query(`SELECT  Location_id ,  Location_name ,  Location_State  FROM  tbl_location WHERE Location_id='${req.params.id}'`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        res.send({error:false,data:result});
        
      }
    })

  }
  let updatelocationbyid=(req, res,next)=>{
    let  Location_name=req.body.Location_name;
    let Location_State=req.body.Location_State;
    let qry= `UPDATE tbl_location SET Location_name='${Location_name}',Location_State='${Location_State}' WHERE Location_id = ${req.params.id} `
    connection.query(qry,(err, result)=>{
      if(err) { console.log(err);
      }else if(result.affectedRows>0){
      res.send({err:false, message:"recored update sucessfully",data:result[0]})
      }
    })
  }
  

    

  let deletelocation =(req, res,next)=>{
    connection.query(`DELETE FROM tbl_location WHERE Location_id=${req.params.id}`,(err, result)=>{
      if(err) {
        console.log(err);
      }else{
        if(result.affectedRows>0){
        res.send({error:false,message:"location id  sucessfully delete"});
        }else{
          res.send({error:false,message:"location id not  delete "});
        }
      }
    })
    
}
let Insertlocation=(req, res,next)=>{
  
  let Location_name=req.body.Location_name;
  let Location_State=req.body.Location_State;

     const errors = validationResult(req);
         if (!errors.isEmpty()) {return res.status(400).json({ errors: errors.array()});}
         else {
             
let qry = `INSERT INTO tbl_location (Location_name, Location_State) VALUES ('${Location_name}','${Location_State}')`;
 
  connection.query(qry,(err, result)=>{
    if(err) { console.log(err);
    }else if(result.affectedRows>0){
    res.send({err:false, message:"recored Insserted sucessfully"})
    }
  })
}
}
module.exports={
    getAlllocation:getAlllocation,
    Insertlocation:Insertlocation,
    updatelocationbyid:updatelocationbyid,
    getlocationbyid:getlocationbyid,
    deletelocation:deletelocation
    
}