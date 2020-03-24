const arr = [1,2,34,5,4,5];

function heapify(arr) {
    
    for(let i = parseInt((arr.length -1)/2); i >= 0; i--) {
        console.log('i', i)
        slideDown(arr, i, arr.length);
    }

    return arr;
}

function slideDown(heap, i, length) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    console.log('left', left);
    console.log('right', right);
    let greatest = left;
    if (greatest > length) return;
    if (right < length && heap[right] > heap[greatest]) {
        greatest = right;
    }

    if (heap[greatest] > heap[i]) {
        console.log(`交换 ${heap[greatest]} ${ heap[i]}`);
        [heap[greatest], heap[i]] = [heap[i], heap[greatest]]
        slideDown(heap, greatest, length);
    }
}

console.log(heapify(arr));
