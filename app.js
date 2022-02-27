//require modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');
const https = require('https');


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



app.post('/', (req, res) => { // data to send to mailchimp

    const list_id = 'd4dda27204'    
    const apiServer = 'a066df2942e48445712e3bdbd902d19bb-us4'
    const data = { // data to send to mailchimp
        members: [
        {
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
            FNAME: req.body.firstName,
            LNAME: req.body.lastName
        },
        email_type: 'html'
         }
                ]
        
    }
    const jsonData = JSON.stringify(data)  
    
    const options ={
        url: `https://us4.api.mailchimp.com/3.0/lists/${list_id}`,
        method: 'POST',
        headers: {
            Authorization: `auth ${apiServer}`
        },
        body: jsonData
    }


    request (options, (error, req, resp) =>{
        
         console.log(req.statusCode)
        switch (req.statusCode) {
            case 200:
                res.sendFile(__dirname+'/success.html')
                break;
            case 400:
                res.sendFile(__dirname+'/failure.html')
                break;
            default:
                res.sendFile(__dirname+'/failure.html')
                break;
        }

        // if(req.statusCode){
        //     req.json({error})
        // }else{
            
        //     console.log(req.statusCode)
        // }
    })

})

app.post('/failure', (req, res) => {
    res.redirect('/')
})

//initialize server
app.listen(port, (err) =>{
    if(err) console.log(err);
    console.log('Server is running on port : ' + port)
})