'use strict';

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./server/config/db');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const env = require('./server/config/env');
const router = require('./server/router/index');

// Start express
const app = express();
const PORT = env.PORT;

// Set secret
app.set('secret', env.SECRET);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// log to the console using morgan
app.use(morgan('dev'));

// Set our api routes
app.use('/server/router/routes/*', router);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(PORT, () => console.log(`API running on localhost:${PORT}`));