/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {

    let resultArray = [];

    function isAnagram(str1, str2) {

        var str1 = str1.toLowerCase();
        var str2 = str2.toLowerCase();

        if (str1 === str2)
            return true;

        var dict = {};

        for(var i = 0; i < str1.length; i++) {
            if (dict[str1[i]])
                dict[str1[i]] = dict[str1[i]] + 1;
            else
                dict[str1[i]] = 1;
        }

        for(var j = 0; j < str2.length; j++) {
            if (dict[str2[j]])
                dict[str2[j]] = dict[str2[j]] - 1;
            else
                dict[str2[j]] = 1;
        }

        for (var key in dict) {
            if (dict[key] !== 0)
                return false;
        }

        return true;
    }

    for (let i=0; i<list.length; i++) {
        for(let j=0; j<list.length; j++) {
            if(list[i]!==list[j]) {
                if((list[i].length === list[j].length) && isAnagram(list[i],list[j])) {
                    resultArray.push([list[i],list[j]]);
                }
            }
        }
    }

    return resultArray;
}

const inputList = [
    'кот', 'пила', 'барокко',
    'стоп', 'ток', 'кошка',
    'липа', 'коробка', 'пост',
];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]