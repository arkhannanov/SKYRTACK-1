var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';


/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
    let arrayOfNumbers = [];
    let sortedArrayOfNumbers = [];
    function ASort (a,b) {return a-b;}

    let regex = /(\d+\.\d+)|(\d+)|(\-\d+\.\d+)/g;
    let matches = string.match(regex);

    for (let i=0; i < matches.length; i++ ) {
        arrayOfNumbers[i]=parseFloat(matches[i]);
    }

    sortedArrayOfNumbers = arrayOfNumbers.sort(ASort);

    return [sortedArrayOfNumbers[0],sortedArrayOfNumbers[sortedArrayOfNumbers.length-1]];
}

console.log(getMinMax(inputData));
