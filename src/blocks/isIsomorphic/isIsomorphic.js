/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {

    if (left.length !== right.length) {
        return false
    }

    var letterMap = {};

    for (var i = 0; i < left.length; i++) {
        var letterA = left[i],
            letterB = right[i];

        if (letterMap[letterA] === undefined) {
            letterMap[letterA] = letterB;
        } else if (letterMap[letterA] !== letterB) {
            return false;
        }
    }
    return true;
}

console.log('egg -> add:', isIsomorphic('egg', 'add')); // true
console.log('paper -> title:', isIsomorphic('paper', 'title')); // true