// function insertionSort(array, compareFn = defaultCompare) {
//     const { length } = array; // {1}
//     let temp;
//     for (let i = 1; i < length; i++) { // {2}
//         let j = i; // {3}
//         temp = array[i]; // {4}
//         while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) { // {5}
//             array[j] = array[j - 1]; // {6}
//             j--;
//         }
//         array[j] = temp; // {7}
//     }
//     return array;
// };


function insertionSort(array) {
    const {length} = array;

    for (let i = 1; i < length; i++) {
        let j = i;
        let temp = array[j];
        while(j > 0 && temp < array[j-1]) {
            array[j] = array[j -1];
            j--;            
        }
        array[j] = temp;
    }
    return array;
}

var a = [14, 34, 112, 52, 12,34, 111];
console.log(insertionSort(a));




