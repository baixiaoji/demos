export default function insertSort(arr) {
    const length = arr.length;
    if (!length) return;

    for (let i = 1; i < arr.length; i++) {
        
        const j = i;
        const temp = arr[j];

        while(j > 0 && temp < arr[j-1]) {
            arr[j] = arr[j-1];
            j--;
        }

        arr[j] = temp;
        
    }
}