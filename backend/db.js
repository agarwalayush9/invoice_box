const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017";

const connectToMongo =async ()=>{
    try{
        mongoose.connect(mongoURI)
        console.log("Connected To Mongo - Success...");
    }
    catch(e){
        console.log(e)
    }
}

module.exports= connectToMongo;