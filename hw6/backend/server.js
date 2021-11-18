const express = require('express');
const cors =require('cors');
const guessRoute =require('./routes/guess.js') ;


const app = express();

app.use(cors());
app.use('/api/guess',guessRoute);


const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server is up on port ${port}.`)
});

