import InsertSort from './insert-sort';



describe(InsertSort, () => {
    it('should sort array', () => {
        const arr = [9,2,3,4,5];
        InsertSort(arr)
        expect(arr[0]).toBe(2);
    })

    it('should quick return when pass empty arr', () =>  {
        const arr = [];
        InsertSort(arr)
        expect(arr.length).toBe(0);
    })
})