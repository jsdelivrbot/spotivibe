// PACKAGES //
const path = require('path');
const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');

// IMPORTS //
const indexRoutes = require('./routes/index');

// CREATE APP //
const app = express();


// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', (p, options, callbacks) => {
  fs.readFile(p, 'utf-8', callbacks);
});

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../client')));

// ROUTES //
app.use('/', indexRoutes);

app.use(cookieParser());

// ERROR HANDLER //
app.use((req, res) => {
  res.status(500);
});

module.exports = app;
