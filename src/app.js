const express = require('express');
const app = express();
const methodOverride = require('method-override')
const path = require('path');
const indexRouter = require('./routes/index');
const notasRouter = require('./routes/notas');

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/notas', notasRouter);

app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})