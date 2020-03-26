const log = console.log;

function swap(arr, i, j) {
    
}
function selectSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        // 寻找最小值得索引
        let min = i;

        for(let j = i + 1; j < length; j++) {
            // 拿 第 i 个 与 后续数组进行比对大小，小值索引赋值给min
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // 每一次循环，进行调整顺序
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}


var a = [14, 34, 112, 52, 12,34, 111];
console.log(selectSort(a));
