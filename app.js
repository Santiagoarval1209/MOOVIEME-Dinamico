var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); 

// Importa las rutas
var inicioRouter = require('./routes/inicio'); 
var contactRouter = require('./routes/contact'); 
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
var authRouter = require('./routes/auth');
var homeRouter = require('./routes/home'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la sesión
app.use(session({
    secret: 'tu_secreto', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

// Usar las rutas
app.use('/inicio', inicioRouter); 
app.use('/contacto', contactRouter); 
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/auth', authRouter); 
app.use('/home', homeRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
