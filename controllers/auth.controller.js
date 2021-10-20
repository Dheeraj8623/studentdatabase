
const connection =require('./mysql.connection');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");  

module.exports={
    login:(req,res,next) => {
      let Email=req.body.Email;
      let password=req.body.password;
      console.log(password);
      connection.query(`SELECT * FROM student WHERE Email='${Email}'`,async(err, result)=>{
        if(err) {
          console.log(err);
        }else{
         const isSame=await bcrypt.compare(password,result[0].password)
         if(isSame){
            let token=jwt.sign({id:result[0].id,Name:result[0].Name},"secret",{algorithm:"HS256",expiresIn:6000*60})
            res.send({error:false, token:token});
         }else{
            res.send({error:true,message:"Invalid username or Password"});
         }
        }
      })
    }
    
}
/*res.send(err)
}else{
  console.log(result);
 const isSame=await bcrypt.compare(password,result[0].password);
 if(password=== result[0].password){
   console.log(password,result[0].password); 
    let token=jwt.sign({id:result[0].id,Name:result[0].Name},"secret",
    {algorithm:"HS256",expiresIn:6000*60});
    console.log(token);
    res.send({error:false, token:token});*/