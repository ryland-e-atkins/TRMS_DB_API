'use strict';

// Dependencies
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./server/config/db');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const env = require('./server/config/env');
const routes = require('./server/routes/routes.js');
//const passport = require('passport');

// Start express
const app = express();
const PORT = env.PORT;

// Spin up database
db.sequelize.authenticate();

// Set secret
//app.set('secret', env.SECRET);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport
// app.use(passport.initialize());

// log to the console using morgan
app.use(morgan('dev'));

// Register the route
routes(app, db);

app.listen(PORT, () => console.log(`API running on localhost:${PORT}`));

// Create HTTP server.
//const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
//server.listen(PORT, () => console.log(`API running on localhost:${PORT}`));