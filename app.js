//require modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');
const http = require('http');


// create application/x-www-form-urlencoded parser



//initialize express
const app = express();
const port = process.env.PORT || 3000;

//declare static folder
app.use(express.static('public'));
app.use( bodyParser.urlencoded({ extended: true })) 

//get the request 
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/signup.html') 
})

app.post('/', (req, res, next) => {
   
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    console.log(fName, lName)
})



//initialize server
app.listen(port, () =>{
    console.log('Server is running on port : ' + port)
})