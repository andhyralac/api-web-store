const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const routes = require('./api/routes/index');
const { dbConnect } = require('./config/database');

const app = express();

// Enable only in development HTTP request logger middleware
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
}

app.use(cors());
app.use(express.json());
app.use('/api/v1.0', routes);
app.use( error404 = (req, res, next) => {
    next(createError(404));
});

// Init MongoDB
dbConnect();

module.exports = app;