// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let isChange = false;
    for (let j = 0; i < length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        isChange = true;
        swap(arr, j, j+1)
      }
    }
    if (!isChange) break;
  }

  return arr;
}

function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {

    let minIndex = i;

    for (let j = i+1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, minIndex, i);
    }

  }
  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
