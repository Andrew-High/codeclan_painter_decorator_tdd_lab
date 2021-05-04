const Decorator = function(){
    this.stock = [];
};

Decorator.prototype.addPaint = function(paintCan){
    this.stock.push(paintCan)
}

Decorator.prototype.calculateTotalPaintVolume = function(){
    let totalPaint = 0;
    for (let paintCan of this.stock) {
        totalPaint += paintCan.volume
    }
    return totalPaint;
}


// Decorator.prototype.paintRoom = function(){
//     this.painted = true;
// };




module.exports = Decorator;
