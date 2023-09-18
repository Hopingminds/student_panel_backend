var express    = require('express');
var bodyParser = require('body-parser');
var path  = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv  = require('dotenv');
require('./Model/Connection.js');
require('./Model/Connection.js')
const fileRoutes = require('./Routes/fileRoutes');

require('./controllers/uploadDataPath.js');


var app = express();
app.use(express.json());
app.use(cookieParser());

const StudentDataRoute= require('./Routes/StudentData.js');
const notificationrouter= require('./Routes/notificationRoutes.js')
const filerouter= require('./Routes/fileRoutes')
const Questionrouter= require('./Routes/dataAndQuestionRoutes.js')
//static folder path
// app.use(cors({
//     credentials: true,
//     origin: 'http://www.studentpanel.hopingminds.tech/'
    
// }));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
// app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('',StudentDataRoute);
app.use('',notificationrouter);
app.use('',filerouter);
app.use('',Questionrouter);
app.use("/",fileRoutes);
// app.use('',);
//assign port
var port = process.env.PORT || 3001;
app.listen(port,()=>console.log('server run at '+port));
// '192.168.1.43',