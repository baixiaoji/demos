const log = console.log;

function bubbleSort(arr) {
    const length = arr.length;

    for(let i = 0; i < length; i++) {
        // let change = true;
        // 每一次二层循环已经确定最后一位是最大的；
        for(let j = 0; j< length - i - 1; j++) {
            if (arr[j] > arr[j +1]) {
                change = false;
                // swap 函数简写
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            } 
        }
        // if(change) break;
    }
    return arr;
}


var a = [14, 34, 112, 52, 12,34, 111];
console.log(bubbleSort(a));
