const mongoose = require('mongoose');
const mongoURI="mongodb+srv://ayush_cse:$Ayush6677@ayush-cse.uokcc3u.mongodb.net/";

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