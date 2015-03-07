var Pizza = function (x, y) {
    this.x = x;
    this.y = y;
    this.lastX = x;
    this.lastY = y;
    this.color = '#' + Math.floor(Math.random()*16777215).toString(16);

    if (!x || !y){
        this.locate();
    }
};

Pizza.prototype.locate = function () {
    this.lastX = this.x;
    this.lastY = this.y;
    this.x = Math.floor((Math.random() * 10) + 1);
    this.y = Math.floor((Math.random() * 10) + 1);
};

module.exports = Pizza;