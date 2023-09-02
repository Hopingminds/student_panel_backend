var express    = require('express');
var bodyParser = require('body-parser');
var path  = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv  = require('dotenv');
require('./Model/Connection.js');
require('./Model/Connection.js')


require('./controllers/uploadDataPath.js');

var app = express();
app.use(express.json());
app.use(cookieParser());

const StudentDataRoute= require('./Routes/StudentData.js');
//static folder path
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
    
}));
// app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('',StudentDataRoute);
//assign port
var port = process.env.PORT || 3001;
app.listen(port,()=>console.log('server run at '+port));
// '192.168.1.43',