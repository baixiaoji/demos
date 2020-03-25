const arr = [1,2,34,5,4,5];

const heapify = (arr) => {
    // i 从 最后一个节点的父节点开始 i最小是0
    for(let i = parseInt((arr.length-1)/2); i >= 0; i--) {
        slideDown(arr, i, arr.length);
    }
    return arr;
}

const slideDown = (arr, i, length) => {
    // 计算出 左右 子节点的坐标
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let greatest = left;
    // 先拿左节点坐标  拿来进行比较 数组长度  超过就返回
    if (greatest > length) return;
    // 拿 右节点 和 左节点进行比较 若右节点较大  进行赋值给  最大值的坐标
    if (right < length && arr[right] > arr[greatest]) {
        greatest = right;
    }
    // 与 传入值 进行比较
    if (arr[greatest] > arr[i]) {
        // 若子节点较大，就进行 swap
        [arr[greatest], arr[i]] = [arr[i], arr[greatest]];
        slideDown(arr, greatest, length);
    }

}

console.log(heapify(arr));
