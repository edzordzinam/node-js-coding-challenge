'use strict';

const express = require('express');
const app = express();
const http = require('http')
const path = require('path');

//initilaizing routes
const routes = require('./routes')(app)

//initial server configurations
const port = 3000
const hostname = '127.0.0.1'

//setup express
//define routes

//client app entry point and serving of static libraries
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(express.static(path.join(__dirname, 'public')));

//start server
http.createServer(app).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
