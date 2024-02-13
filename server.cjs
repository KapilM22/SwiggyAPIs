const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
 const{resturarnt,Users} = require('./schema.cjs')
 const app = express()
 app.use(bodyparser.json())
 app.use(cors())
 async function connectToDb(){
   try{
     await mongoose.connect('mongodb+srv://kapil:Kapil@cluster0.yfqqc2k.mongodb.net/Swiggy?retryWrites=true&w=majority')
      const port=process.env.PORT || 7000
      app.listen(port,function(){
         console.log('listen the port')
      })
   }
   catch(error){
      console.log(error)
   }
 }

 app.post('/home',async function(request,response){
   console.log("run")
   try{
       await resturarnt.create({
         "areaName":request.body.areaName,
         "avgRating":request.body.avgRating,
         "costForTwo":request.body.costForTwo,
         "cuisines":request.body.cuisines,
         "name":request.body.name
      })
      response.status(201).json({
         "status":"Area received"
      })
   }
   catch(error){
       response.status(500).json({
         "status":"not received"
       })
   }
 })
 app.get('/get-restuarant-details',async function(request,response){
   try{
      const restuarantDetails=await resturarnt.find()
      response.status(200).json(restuarantDetails)
   }
   catch(error){
      response.status(500).json({
         "status":"no details",
         "error":error
       })
   }
 })
 app.post('/create-new-user',function(request,response){
   console.log(request.body.email)
   try{ Users.create({
     "userName":request.body.userName,
     "email":request.body.email,
     "password":request.body.password,
     "contact":request.body.contact
    })
    response.status(200).json({
     "status":"successfully completed"
    })
 }
 catch(error){
     response.status(500).json({
         "status":"does-not-created",
         "error":error
     })
     
 }})
  app.post('/validate-user',async function(request,response){
     console.log("run")
   try{
     const user = await Users.findOne({
         "email": request.body.email,
         "password":request.body.password
     })
     if(user){
         response.json({
             "status":"valid"
         })
     }
     else{
         response.json({
             "status":"invalid"
         })
     }
   }
   catch(error){
     response.status(500).json({
         "status":does-not-created,
         "error":error
     })
   }
   })
 connectToDb()
 