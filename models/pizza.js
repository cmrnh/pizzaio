var Pizza = function (x, y) {
    this.x = x;
    this.y = y;
};

Pizza.prototype.locate = function () {
    this.x = Math.floor((Math.random() * 10) + 1);
    this.y = Math.floor((Math.random() * 10) + 1);
};

module.exports = Pizza;