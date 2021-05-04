const Decorator = function(){
    this.stock = [];
};

Decorator.prototype.addPaint = function(paintCan){
    this.stock.push(paintCan)
}

// Decorator.prototype.paintRoom = function(){
//     this.painted = true;
// };




module.exports = Decorator;
