const mysql=require('mysql');

let connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database1'
})

connection.connect((err)=>{

(err)?console.log('Error while connecting to database1'):console.log('connection established');

})

module.exports=connection;