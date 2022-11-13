const express = require('express');
const path = require('path');

const homeRouter = require('./router/homerRouter');

const app = express();

app.use(express.urlencoded({ extended: false }));

//para fazer com que a pasta public seja estatica;
app.use(express.static(path.join(__dirname, 'public')));  
//defini que a view engine sera ejs
app.set('view engine', 'ejs'); 

app.use('/', homeRouter);

app.listen(8000);