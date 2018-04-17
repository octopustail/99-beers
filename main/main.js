function lyricTemp(count, str) {
    var num = count;
    while (num > 1) {
        str = str + num + " bottles of beer on the wall, " + num + " bottles of beer.\n" +
            "Take one down, pass it around, " + (num - 1) + " bottles of beer on the wall.\n";
        num--;
    }
    return str;
}

module.exports = function main(count) {
    var str = '', lastTwoLine;
    str = lyricTemp(count, str);
    lastTwoLine =`1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`;
        str = str + lastTwoLine;
    return str;
};