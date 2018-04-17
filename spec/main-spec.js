const main = require('../main/main');

describe('main()', function () {
    it("should generate two lyric lines",function () {
        var count = 99;
        var result = main(count);
        var output = "99 bottles of beer on the wall, 99 bottles of beer.\n"+
            "Take one down, pass it around, 98 bottles of beer on the wall.";
        console.log(result);
    });


});