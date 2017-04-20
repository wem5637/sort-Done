describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {

        expect(split([4, 5, 2, 1])).toEqual([
            [4, 5],
            [2, 1]
        ]);
        expect(split([4, 5, 2, 1, 6])).toEqual([
            [4, 5, 2],
            [1, 6]
        ]);


    });
});


describe('Merge function', function() {
    it('merge function should able to merge arrays and keep correct order', function() {

        expect(merge([3, 4], [1, 2])).toEqual(
            [1, 2, 3, 4]
        );
        expect(merge([1, 2], [3, 4])).toEqual(
            [1, 2, 3, 4]
        );
        expect(merge([1, 2, 4], [3, 5])).toEqual(
            [1, 2, 3, 4, 5]
        );
        expect(merge([3, 5], [1, 2, 4])).toEqual(
            [1, 2, 3, 4, 5]
        );

    });
});



describe('Merge Sort', function() {
    it('handles an empty array', function() {
        expect(mergeSort([])).toEqual([]);

    });
    it('Test1', function() {
        expect(mergeSort([4, 5, 2])).toEqual([2, 4, 5]);

    });
    it('Test2', function() {
        expect(mergeSort([8, 1, 5, 10, 400, 3])).toEqual([1, 3, 5, 8, 10, 400]);

    });
    it('Test3', function() {
        expect(mergeSort([7, 9, 32, 7, 7, 8])).toEqual([7, 7, 7, 8, 9, 32]);

    });
    it('Test4', function() {
        expect(mergeSort([-4, 8, 4, 55, 30, 10, -6])).toEqual([-6, -4, 4, 8, 10, 30, 55]);

    });
    it('same array', function() {
        expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);

    });
    it('2 elements', function() {
        expect(mergeSort([4, 2])).toEqual([2, 4]);

    });
});
