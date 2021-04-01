
//file to connect and listen to  server for user

const express = require('express');
const UserRouter = require('./QUERY/User_System/UserController');
//const PostRouter = require('./QUERY/Post_System/PosController');
const app = express();
require('./QUERY/mongodb/mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;// nodemon server.js


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./QUERY/public'));
//app.use(express.json())
//registe router
app.use(UserRouter);

//app.use(PostRouter);


app.listen(port,()=>{
    console.log('Serve Starting!'+port);
})