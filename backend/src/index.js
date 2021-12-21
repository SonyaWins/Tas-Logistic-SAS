const express = require("express");
const morgan= require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');

//initializers
const app= express();
require('./database');
require('./passport/local-auth')

//setting
app.set('port',process.env.PORT || 3001)
app.set('json spaces',2)

//MIDDLEWARES
app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(session({
    secret: 'secretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//DB CONNECTION
mongoose.connect('mongodb://localhost/mongodb')
    .then(db => console.log('Database conected succesfully!'))
    .catch(err => console.log(err));
//ROUTES
app.use(require('./routes/routes'))

//START SERVER
app.listen(app.get('port'),()=>{console.log("Server on port "+app.get('port'))});