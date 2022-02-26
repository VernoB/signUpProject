//require modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');
const http = require('http');


//initialize express
const app = express();
const port = process.env.PORT || 3000;



//get the request 
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname) + 'signup.html')
})





//initialize server
http.createServer((request, response) => {
    response.writeHead(200)
})
.listen(parseInt(port,10), () =>{
    console.log('Server is running on port : ' + port)
})