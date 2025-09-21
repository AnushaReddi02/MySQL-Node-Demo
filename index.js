const {faker }= require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database : 'MySQL_With_Node',
  password : 'harika'
});

data = [];

let getUser = () =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ]
}

for(let i=0;i<100;i++){
  data.push(getUser());
}

let q = "INSERT INTO users(id,username,email,password) VALUES ?";

try{
  connection.query(q,[data],(err,res)=>{
    if(err) throw err;
    console.log(res);
  });
}catch(err){
  console.log(err);
}

connection.end();