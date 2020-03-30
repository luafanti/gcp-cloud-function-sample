const express = require('express');

const app = express();

app.get('/', function(req, res) {
    console.log("Hello GET");
    res.send(`Hello Express GET method`);
});

app.post('/', function(req, res) {
    console.log("Hello POST");
    res.send(`Hello Express POST method. Your name is ${req.body.name}`);
});

exports.cloudFunctionDemo = app;