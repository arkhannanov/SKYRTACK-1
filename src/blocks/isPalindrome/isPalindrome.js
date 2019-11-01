/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */

function isPalindrome(str) {

    function delSpaces(str)
    {
        str = str.replace(/\s/g, '');
        return str;
    }

    let string = delSpaces(str);
    var strLen = string.length;
    var result = null;
    for (var i = 0; i < strLen; i++) {
        if (string[i].toLocaleLowerCase() === string[strLen - 1 - i].toLocaleLowerCase()) {
            result = true;
        } else {
            result = false;
            return result;
        }
    }
    return result;
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama'));// true