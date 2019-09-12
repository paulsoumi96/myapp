'use strict';
//app.use(express.static(path.join(__dirname,"public")));
const express = require('express');
var path = require('path');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var htmlPath = path.join(__dirname, 'output/dist/');

app.use(express.static(htmlPath));

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');

