import BubbleSort from './bubble-sort';


describe(BubbleSort, () => {
    it('should sort array', () => {
        const arr = [9,2,3,4,5];
        BubbleSort(arr)
        expect(arr[0]).toBe(2);
    })

    it('should quick return when pass empty arr', () =>  {
        const arr = [];
        BubbleSort(arr)
        expect(arr.length).toBe(0);
    })
})