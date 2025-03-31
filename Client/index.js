const express=require ("express");
const { connection } = require("./connection/connect");


const app=express();

const PORT=process.env.PORT||8080



app.listen(PORT,async ()=>{
    try{
     await connection
     console.log(`connected to ${PORT}`)
    }catch(e){
        console.log(e)
    }
    console.log("Server is Running")
})