//import islemleri
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/connectDb');



//rest islemleri
const app= express();
app.use(express.json());
dotenv.config()

//middleware ara yazılımları


//routess
app.get("/",(req,res) =>{
    res.send({message: "API Calışıyor."})

    //res.send('{<h1>welcomem</>}')
})

//connect databasi bağlayacağız
db();

//ports
const PORT = process.env.PORT || 5000;

//listten 
app.listen(PORT, ()=>{
    console.log("server start");
})