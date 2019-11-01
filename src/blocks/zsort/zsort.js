/**
 * Перенос нулей в конец массива
 * @param  {number[]} input
 * @return {number[]}
 */
function zsort(input) {

    let newArray = [];
    let resultArray = [];

    for (let i=0; i < input.length; i++) {
        newArray[i]= input[i];
        if(input[i]=== 0) {
            newArray[i]= Infinity;
        }
    }

    let infinityArray = newArray.sort();

    for (let j=0; j < infinityArray.length; j++) {
        resultArray[j]=infinityArray[j];
        if(infinityArray[j] === Infinity) {
            resultArray[j]=0;
        }
    }
    return resultArray;
}


// Проверка
console.log(zsort([1, 0, 2, 3, 0, 4, 0])); // [1, 2, 3, 4, 0, 0, 0]