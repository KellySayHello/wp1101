const bodyParser = require('body-parser')
const db= require("./mongo.js")
const express = require('express')
const cors= require('cors')
const routes = require('./routes/index.js')

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

db.on("error",(err)=>console.log(err))
db.once("open",async()=>{
  console.log("mongo db connect established");
  routes(app);
  app.listen(port,()=>{
    console.log(`server is on port ${port}`);
  });
})

