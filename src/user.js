const mysql= require("mysql");

const Promise=require("bluebird");
 const Connection = require("mysql/lib/Connection");
 Promise.promisifyAll(require("mysql/lib/Connection").prototype);

 const dbinfo={
     host:"localhost",
     user:"root",
     database:"wptexam",
     password:"cdac"
 }

 async function createConnection (){
     const connection=mysql.createConnection(dbinfo);
     await connection.connectAsync();
     console.log("Connection Succesfull")
    await connection.endAsync()
 }
async function addMessages(messages){
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`INSERT INTO messages values(?)`;
    await connection.queryAsync(sql,[messages.messages]);
    console.log("message added");
    await connection.endAsync();
}
// const messages={messages:"Hi shubham"}
// addMessages(messages);

async function selectUser(){
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`select * from messages`;
    const list=await connection.queryAsync(sql,[]);
    console.log(list);
    await connection.endAsync();
    return list;
}
selectUser();

module.exports={addMessages,selectUser}