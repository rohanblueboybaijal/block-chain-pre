const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));

app.get('/', function(req,res){
    res.send('You are on the Home Page. To hash strings, go to /hash');
});

app.post('/hash', function(req, res){
    //console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    var str = req.body.data;

    var hash = crypto.createHash('sha256');
    hash.update(str);
    var hex = hash.digest('hex');
    res.end(JSON.stringify({hash: hex}));

});

app.listen(8787, console.log('Listening to port 8787'));