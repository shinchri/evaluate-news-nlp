var path = require('path')
var MeaningCloud = require('meaning-cloud')

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
dotenv.config();

const app = express()

app.use(express.static('dist'))

var textapi = new MeaningCloud({
    key: process.env.API_KEY
});

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
