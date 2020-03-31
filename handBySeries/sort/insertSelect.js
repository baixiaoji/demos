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
    // 循环当前数组，记得边界值，
    // 起始位置为 1 ，默认第一位已经排序好
    for (let i = 1; i < length; i++) {
        let j = i;
        // 选出当前这张卡牌
        let temp = array[j];
        // 选出来的卡牌与左边部分进行比较
        // 边界值 最小为 0 && 卡牌 和 前一项 进行比较
        while(j > 0 && temp < array[j-1]) {
            array[j] = array[j -1];
            j--;            
        }
        // 跳出循环那一刻，就能找到合适为之，然后将卡牌进行赋值
        array[j] = temp;
    }
    return array;
}

var a = [14, 34, 112, 52, 12,34, 111];
console.log(insertionSort(a));




