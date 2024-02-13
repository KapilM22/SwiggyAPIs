const mongoose = require('mongoose')
const restaurantSchema = new mongoose.Schema({
    areaName:{
        type:String
    },
    avgRating:{
        type:Number
    },
    costForTwo:{
        type:String
    },
    cuisines:{
        type:Array
    },
    name:{
        type:String
    }
},{versionKey:false})
// const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    userName:{
        type: String
        
    },
    email:{
        type: String
    },
    password:{
        type: String
       
    },contact:{
        type: Number
    }
},{versionKey:false})
const Users=mongoose.model('userDetails',userSchema)
const resturarnt = mongoose.model('restaurant',restaurantSchema)
module.exports={resturarnt,Users}