var express = require('express');
var app = express();
var server = require('http').createServer(app);
var controller = require('./controller')(server);

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res, next) {
    //console.log('req.url = '+req.url);
    if(req.url.indexOf('.css') === -1 && req.url.indexOf('.js') === -1 && req.url.indexOf('socket.io') === -1){
        req.url = '/pizzas.html';
    }
    next();
});

app.use(express.static('./public'));

app.get('*', function (req, res, next) {
    res.render('404', {
        title:'404 error',
        exampleVar: 'random'
    });
});

server.listen(1337);