/**
 * Релизуйте сортировку массива
 * @param   {any[]}     values  сортируемый массив
 * @returns {any[]}
 */
const defaultSortingAlgorithm = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

const quickSort = (
    unsortedArray,
    sortingAlgorithm = defaultSortingAlgorithm
) => {

    const sortedArray = [ ...unsortedArray ];
    const recursiveSort = (start, end) => {

        if (end - start < 2) {
            return;
        }

        const pivotValue = sortedArray[end];
        let splitIndex = start;
        for (let i = start; i < end; i++) {
            const sort = sortingAlgorithm(sortedArray[i], pivotValue);

            if (sort === -1) {

                if (splitIndex !== i) {
                    const temp = sortedArray[splitIndex];
                    sortedArray[splitIndex] = sortedArray[i];
                    sortedArray[i] = temp;
                }

                splitIndex++;
            }

        }

        sortedArray[end] = sortedArray[splitIndex];
        sortedArray[splitIndex] = pivotValue;

        recursiveSort(start, splitIndex - 1);
        recursiveSort(splitIndex + 1, end);
    };

    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
};

console.log(quickSort([7, 2, 99, 5, 1, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]