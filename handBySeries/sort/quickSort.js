function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// 一次循环的快排的思路
function _partition(arr) {
    // 随机找一个索引位置
    const poivtIndex = Math.floor(Math.random() * arr.length);
    let poivt = arr[poivtIndex];
    // 索引位置和最后一个元素交换位置
    swap(arr, poivtIndex, arr.length - 1);
    
    let i = -1;
    let j = 0;
    
    // 进行循环 当前的数组
    for(; j < arr.length - 1; j++)  {
        // 找到小于 标准值的数据
        if (arr[j] < poivt) {
            // 通过第二个指针  进行交换位置
            i++
            swap(arr, i, j);
        }
    }
    // 当前结束后，将 标准值 位置调回来
    swap(arr, i + 1, arr.length -1);
    // 分别对左右两个集合 同样进行递归查找
    partition(arr, 0, i + 1);
    partition(arr, i + 2, arr.length -1);
}

function quickSort(arr) {
    return partition(arr)
}
function partition(arr, start = 0, end = arr.length -1) {
    if (start >= end) {
        return;
    }
    const number = Math.random() * (end - start + 1) + start;
    const poivtIndex = Math.floor(number);
    const poivt = arr[poivtIndex];
    
    swap(arr, poivtIndex, end);

    let i = start - 1;
    let j = start;

    for(; j < end; j++) {
        if (arr[j] < poivt) {
            i++
            swap(arr, i, j);
        }
    }
    
    swap(arr, i + 1, end);
    
    partition(arr, start, i);
    partition(arr, i + 2, end);

    return arr;
}

console.log(quickSort([3,4,11,23,12,33,56,6]))