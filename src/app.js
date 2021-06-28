const express = require('express');
const log = require('morgan');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const indexRoutes = require('./routes/index.js');


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://cris_moma:hVG0KBbo2Q1GHf3K@cluster0.i04tv.mongodb.net/iot?retryWrites=true&w=majority') 
.then(bd => console.log('conexion exitosa')).catch(err => console.log(err));

app.use(log('dev'));
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
//app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log('servidor funcionando', app.get('port'))
});