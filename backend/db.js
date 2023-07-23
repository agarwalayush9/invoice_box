const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI=process.env.MONGODB_URI;
const connectToMongo =async ()=>{
    try{
        mongoose.connect(mongoURI);
        console.log("Connected To Mongo - Success...");
    }
    catch(e){
        console.log(e)
    }
}

module.exports= connectToMongo;