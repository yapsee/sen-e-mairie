const express = require('express');
const mongoose = require('mongoose');
const Files = require('edacy-files-walk');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {DB_URL, PORT} = process.env


mongoose.connect(DB_URL)
         .then((result)=>{
          console.log('App is connect to atlas DB')
          initApp()
         })
         .catch((error)=>{
          console.log('Error when connecting to db \n', + error)
         });


function initApp() {


 var routes = Files.walk(__dirname + '/api/modules');           

 for (var i = 0; i < routes.length; i++)                        
   if (routes[i].indexOf('public.routes') !== -1)             
   require(routes[i])(app);                                 

// USE GUARD MIDDLEWARE
require('./api/modules/auth/auth.guard')(app);

// IMPORT PRIVATE ROUTES
for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('routes') !== -1 && routes[i].indexOf('public.routes') === -1)
    require(routes[i])(app);
          
  app.listen(PORT,()=>{
    console.log('server listening to')
  })  

}