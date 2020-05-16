export default function SelectionSort(arr) {
    const length = arr.length;
    if (length < 1) return;

    for (let i = 0; i < length; i++) {
        
        let min = i;

        for (let j = i+1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    
}