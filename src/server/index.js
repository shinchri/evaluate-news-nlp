var path = require('path')
var MeaningCloud = require('meaning-cloud')

const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const app = express()

app.use(express.static('dist'))

var cors = require('cors');

app.use(cors());
app.options('*', cors());

var textapi = new MeaningCloud({
    key: process.env.API_KEY
});

console.log(__dirname)

app.get('/', function (req, res) {
    
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    // console.log('this')
    res.send(mockAPIResponse)
})

app.get('/api', function (req, res) {
    res.send({"key": process.env.API_KEY});
})