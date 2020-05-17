export default function quickSort(arr) {
    partition(arr, 0, arr.length);
}

function partition(arr, start, end) {
    if (start >= end) {
        return;
    }

    const pivot = parseInt(Math.random() * (end - start + 1) + start);
    
    const midValue = arr[pivot];
    
    swap(arr, pivot, end);

    let i = start - 1;
    
    for (let index = start; index < end; index++) {
        if (arr[index] < midValue) {
            i++;
            swap(arr, index, i);
        }   
    }

    swap(arr, i+1, end);

    partition(arr, start, i);

    partition(arr, i + 2, end);

}


function swap(arr, index, target) {
    [arr[index], arr[target]] = [arr[target],arr[index]];
}