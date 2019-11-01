/**
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */

var haveSameLength = function(str, a, b){
    return (str.match(a) || [] ).length === (str.match(b) || [] ).length;
};
var isBalanced = function(str){
    var arr = [
        [ /\(/gm, /\)/gm ], [ /\{/gm, /\}/gm ], [ /\[/gm, /\]/gm ]
    ], i = arr.length, isClean = true;

    while( i-- && isClean ){
        isClean = haveSameLength( str, arr[i][0], arr[i][1] );
    }
    return isClean;
};

console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false