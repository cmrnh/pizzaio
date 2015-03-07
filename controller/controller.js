var Controller = function (server) {
    var io = require('socket.io')(server);
    var models = require('../models');
    var pizzas = [];

    io.on('connection', function(socket){
        console.log('a user connected');
        //io.emit('createPizza', pizza);
        updatePizzas();
    });

    setInterval(updatePizzas, 2000);

    function createPizzas () {
        var pizzaCount = Math.floor((Math.random() * 10) + 1);
        console.log(pizzaCount);
        for(var i = 0; i < pizzaCount; i++) {
            var pizza = new models.Pizza();
            pizzas.push(pizza);
        }
    }

    function updatePizzas () {
        pizzas.forEach(function (pizza) {
            pizza.locate();
            io.emit('pizzaLocation', pizza);
        });
    }

    createPizzas();
};

module.exports = Controller;
