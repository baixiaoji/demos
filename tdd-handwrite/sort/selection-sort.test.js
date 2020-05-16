import SelectSort from './selection-sort';



describe(SelectSort, () => {
    it('should sort array', () => {
        const arr = [9,2,3,4,5];
        SelectSort(arr)
        expect(arr[0]).toBe(2);
    })

    it('should quick return when pass empty arr', () =>  {
        const arr = [];
        SelectSort(arr)
        expect(arr.length).toBe(0);
    })
})