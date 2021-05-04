const PaintCan = function(volume){
    this.volume = volume;
};

PaintCan.prototype.empty = function() {
    this.volume = 0;
};


// Room.prototype.paintRoom = function(){
//     this.painted = true;
// };




module.exports = PaintCan;