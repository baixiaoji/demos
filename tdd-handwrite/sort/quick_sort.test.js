import quickSort from './quick-sort';

describe(quickSort, () => {
    it('should sort array', () => {
        const arr = [9,2,3,4,5];
        quickSort(arr);
        expect(arr[0]).toBe(2);
    })

    it('should quick return when pass empty arr', () =>  {
        const arr = [];
        quickSort(arr)
        expect(arr.length).toBe(0);
    })
})