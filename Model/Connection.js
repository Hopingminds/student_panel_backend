const mongoose = require('mongoose');

const dotenv  = require('dotenv');

dotenv.config({'path':'./.env'});

const  MONGO_URL  = process.env.MONGO_URL;



    mongoose.connect(MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{console.log('connected to db')})
.catch((error)=>{console.log('error',error)});





