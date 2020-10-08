const dotenv = require('dotenv');
dotenv.config();

console.log(`your api key is ${process.env.API_KEY}`)


const application_key = process.env.API_KEY


var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// const fs = require('fs');

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// adding Route

// route to send the API Key:

app.get('/api_key', keySend);

function keySend(req, res) {

    res.send(application_key);

}