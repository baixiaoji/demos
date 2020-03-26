function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = parseInt(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    const result = [];
    
    while(left.length && right.length) {
        if (left[0] > right[0]){
            result.push(right.shift())
        } else {
            result.push(left.shift())
        }
    }

    result.push(...left, ...right);

    return result;
}


var a = [14, 34, 112, 52, 12,34, 111];
console.log(mergeSort(a));