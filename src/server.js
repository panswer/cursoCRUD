const express = require('express');
const path = require('path');

// Initializations
const app = express();

// Settings
app.get('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false })); //nos ayuda a recibir los datos en json

// Global Variables


// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;