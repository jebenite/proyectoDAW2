var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var hbsExtend = require('express-handlebars-extend');

var routes = require('./routes/index');
var centrosMed = require('./routes/centrosMed');
var laboratorios = require('./routes/laboratorios');
var usuarios = require('./routes/usuarios');
var muestras = require('./routes/muestras');
var examenes = require('./routes/examenes');
var pacientes = require('./routes/pacientes');

var session = require('express-session');

// mongo ds139665.mlab.com:39665/tareasdaw1 -u jebenite -p 180895 <-mongoshell
mongoose.connect('mongodb://jebenite:180895@ds139665.mlab.com:39665/tareasdaw1');
// mongoose.connect('mongodb://sp_bdd:1234@ds019076.mlab.com:19076/sp_bdd');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongoose connection successful");
});

var app = express();

// view engine setup handlebars
var hbs = hbsExtend(exphbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts'
}));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'my demo session',
    resave: true, //se crea la sesion pero nunk se cierra
    saveUninitialized: true //
}));
var auth = function(req, res, next) {
    //console.log("este es un middleware");
    if (req.session["rol"] != "paciente") {
        res.sendStatus(401);
        return;
    }
    if (req.session["rol"] != "operario") {
        res.sendStatus(401);
        return;
    }
    next();
};
app.use('/', routes);
app.use('/muestrase', require('./routes/muestrasE.js'));

app.use('/centrosMed', /*auth*/ centrosMed);
app.use('/laboratorios', /*auth*/ laboratorios);
app.use('/login', usuarios);
app.use('/pacientes', pacientes);
app.use('/muestras', muestras);
app.use('/examenes' /*, auth*/ , examenes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('No encontrado');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            layout: false
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        layout: false
    });
});


module.exports = app;
