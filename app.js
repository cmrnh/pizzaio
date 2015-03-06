var app = require('express')();
var http = require('http').createServer(app);
var io = require('./routes').SocketIo(http);
var express = require('express');
var models = require('./models');


app.get('/*', function (req, res, next) {
    //console.log('req.url = '+req.url);
    if(req.url.indexOf('.css') === -1 && req.url.indexOf('.js') === -1 && req.url.indexOf('socket.io') === -1){
        req.url = '/pizzas.html';
    }
    next();
});

var pizza = new models.Pizza(3, 5);
pizza.locate();
console.log(pizza);

app.use(express.static('./public'));

app.listen(1337);