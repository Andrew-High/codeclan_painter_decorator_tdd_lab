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

    it('should be able to check if it is empty', function(){
        paintCan.empty();
        const actual = paintCan.volume;
        assert.strictEqual(actual, 0);
    });

    it('should be able to empty itself of paint', function(){
        paintCan.empty();
        const actual = paintCan.volume;
        assert.strictEqual(actual, 0);
    });

});