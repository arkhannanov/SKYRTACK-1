/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */

const compare = (a, b) => a - b;

function missing(array) {
    array.sort(compare);

    if (array.length === array[array.length - 1]) {
        return undefined;
    } else {
        let resultLength = array[array.length - 1] + 1;

        for (let i = 1; i < resultLength; i++) {
            if (array.indexOf(i) === -1) {
                return i;
            }
        }
    }
}
console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined
