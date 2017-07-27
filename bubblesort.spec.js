describe('Bubble Sort', function(){
    beforeEach(function(){
        var totalCount = 0
    });

    it ('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it ('handles an already sorted array', function(){
        bubbleSort([2, 4, 6, 7]);
        expect(totalCount).toEqual(0)
    });
    it ('handles an unsorted array', function(){
        expect(bubbleSort([ 4, 2, 6, 9, 3])).toEqual([ 2, 3, 4, 6, 9])
    });
    it ('expects array to be same type', function(){
        expect(bubbleSort([ 4, 2, 6, 'a', 3])).toEqual('Cannot sort an array of different types')
    })

});

