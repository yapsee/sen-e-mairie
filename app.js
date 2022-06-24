const express = require('express');
const mongoose = require('mongoose');
const Files = require('edacy-files-walk');
const UserRoutes = require("./src/routes/user.route");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {DB_URL, PORT, SERVER} = process.env


mongoose.connect(DB_URL)
         .then((_result)=>{
          console.log('App is connect to atlas DB')
          initApp()
         })
         .catch((error)=>{
          console.log('Error when connecting to db \n', + error)
         });


function initApp() {
  app.listen(PORT,()=>{
    console.log(`server listening to ${SERVER}:${PORT}`)
  })  
  app.use("/users",UserRoutes);
}