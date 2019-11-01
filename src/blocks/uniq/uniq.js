/**
 * Получения массива уникальных значений
 * @param  {number[]} values
 * @return {*}
 */
function uniq(values) {

    let result = [];

    for (let number of values) {
        if (!result.includes(number)) {
            result.push(number);
        }
    }
    return result;
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));