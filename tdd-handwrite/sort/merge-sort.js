export default function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = parseInt(arr.length / 2);

    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
    
    const result = [];
    
    while(leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            result.push(leftArr.shift())
        } else {
            result.push(rightArr.shift());
        }
    }

    result.push(...leftArr, ...rightArr);

    return result;
}