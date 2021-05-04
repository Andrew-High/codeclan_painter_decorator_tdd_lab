const assert = require('assert');
const Decorator = require('../decorator.js');



describe('Decorator', function(){

    let decorator;

    beforeEach(function(){
        decorator = new Decorator();
    });

    it('should start with an empty paint stock', function(){
        const actual = decorator.stock;
        assert.strictEqual(actual, 0);
    });

    // it('should be able to add a can of paint to paint stock', function(){
    //     paintCan.empty();
    //     const actual = paintCan.volume;
    //     assert.strictEqual(actual, 0);
    // });

    // it('should be able to calculate total litres paint it has in stock', function(){
    //     paintCan.empty();
    //     const actual = paintCan.volume;
    //     assert.strictEqual(actual, 0);
    // });

    // it('should be able to calculate whether it has enough paint to paint a room', function(){
    //     paintCan.empty();
    //     const actual = paintCan.volume;
    //     assert.strictEqual(actual, 0);
    // });

    // it('should be able to paint room if has enough paint in stock', function(){
    //     paintCan.empty();
    //     const actual = paintCan.volume;
    //     assert.strictEqual(actual, 0);
    // });

});