const assert = require('assert');
const PaintCan = require('../paint_can.js');



describe('PaintCan', function(){

    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(5);
    });

    it('should have a number of litres', function(){
        const actual = paintCan.volume;
        assert.strictEqual(actual, 5);
    });

    // it('should be able to check if it is empty', function(){
    //     const actual = room.area;
    //     assert.strictEqual(actual, 10);
    // });

    // it('should be able to empty itself of paint', function(){
    //     const actual = room.area;
    //     assert.strictEqual(actual, 10);
    });