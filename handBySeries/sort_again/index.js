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
  if (arr.length < 2) return arr;

  const leftArr = mergeSort(arr.slice(0, parseInt(arr.length/ 2 )));
  const rightArr = mergeSort(arr.slice( parseInt(arr.length/ 2 )));

  return merge(leftArr, rightArr)
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result.push(...left, ...right);

  return result;
}


function _merge(arr, middle) {
  let i = 0;
  let j = middle;

  while (i < middle && j < arr.length) {
    let w = 0;

    while(arr[i] < arr[j] && i < middle) { i++ }
    while(arr[i] < arr[j] && j <arr.length) {w++; j++}

    const part = arr.splice(j - w, j);

    arr.splice(i, 0, ...part);

    i += w;
    j += w;
  }
}
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
