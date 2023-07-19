const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors')

connectToMongo();
const app = express();
const port = 3000;

// app.get('/',(req,res)=>{
  //   res.send('Hi founder and Ceo')
  // })
app.use(cors())
app.use(express.json())
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/invoice',require('./routes/invoice'))

app.listen(port, () => {
  console.log(`Invoice Box listening at port ${port}`);
});
