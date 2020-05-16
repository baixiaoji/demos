export default function BubbleSort(arr) {
    if (arr.length <= 1) return;

    for (let i = 0; i < arr.length; i++) {
        
        let isChange = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                isChange = true;
            }
        }

        if (!isChange) break;
    }
}