const heap = [ 34, 5, 5, 2, 4, 1 ];

function insert(heap, item) {
    // 插入最后一个
    heap.push(item);
    // 向上浮动 ，记得传入最后一个数字的坐标
    slideUp(heap, heap.length - 1);
    return heap;
}

function slideUp(heap, i) {
    // 若最后一个数值的 坐标为 零直接返回   
    // ？这边存在一些不明白，为什么是零  若当前的坐标为零 已经是最大节点
    if (i  === 0) return;
    // 找到父节点
    const parent = parseInt((i -1)/2);
    // 进行大小比较
    if (heap[parent] < heap[i]) {
        // 子节点较大， 与父节点交换位置
        [heap[parent], heap[i]] = [heap[i], heap[parent]]
        // 调换过后 再父节点上再网上看
        slideUp(heap, parent);
    }
}


console.log(insert(heap, 40));