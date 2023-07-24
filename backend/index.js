const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors')

connectToMongo();
const app = express();
const port = 5000;

// app.get('/',(req,res)=>{
  //   res.send('Hi founder and Ceo')
  // })
const corsOption =cors(
  {
    origin:[""],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true,
    optionsSuccessStatus:200
  }
)
app.use(cors(corsOption))
app.use(express.json())
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/invoice',require('./routes/invoice'))

app.listen(port, () => {
  console.log(`Invoice Box listening at port ${port}`);
});
app.get('/',(req,res)=>{
  res.json("invoice box")
})
