const mongoose = require('mongoose');
require('dotenv').config();
const connectToMongo =async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected To Mongo - Success...");
    }
    catch(e){
        console.log(e)
    }
}

module.exports= connectToMongo;