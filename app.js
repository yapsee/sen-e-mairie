const express = require('express');
const mongoose = require('mongoose');
const Files = require('edacy-files-walk');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {DB_USERNAME, DB_PASS, NODE_DEV, PORT} = process.env


mongoose.connect(process.env.DB_URL)
         .then((result)=>{
          console.log('App is connect to atlas DB')
          initApp()
         })
         .catch((error)=>{
          console.log('Error when connecting to db \n', + error)
         });


function initApp() {
          
  app.listen(PORT,()=>{
    console.log('server listening to')
  })  

}