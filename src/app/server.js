var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('Hello World');
})

app.listen(3000, function () {
    console.log('Example'); 
    console.log('Hello World'); 
})
