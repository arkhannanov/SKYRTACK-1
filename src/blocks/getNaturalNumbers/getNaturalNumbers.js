// Написать функцию получения простых чисел.
// Число является простым, если делиться на 1 и само себя.

var getNaturalNumbers = function (max) {
    let resultArray = [];
    function isprime(n){
        if(n==1) // 1 - не простое число
            return false;
        // перебираем возможные делители от 2 до sqrt(n)
        for(d=2; d*d<=n; d++){
            // если разделилось нацело, то составное
            if(n%d==0)
                return false;
        }
        // если нет нетривиальных делителей, то простое
        return true;
    }

    for (let i=1; i<max; i++) {
        if(isprime(i) === true) {
            resultArray.push(i);
        }
    }

    return resultArray;
};


console.log(getNaturalNumbers(40));
