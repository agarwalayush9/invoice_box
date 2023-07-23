const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURI=process.env.REACT_APP_INVOICE_DATA;
const connectToMongo =async ()=>{
    try{
        mongoose.connect('mongodb+srv://ayush_cse:$Ayush6677@ayush-cse.uokcc3u.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected To Mongo - Success...");
    }
    catch(e){
        console.log(e)
    }
}

module.exports= connectToMongo;