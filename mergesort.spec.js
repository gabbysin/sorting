describe ('Split Array Function', function(){
	it ('is able to split an array into two halves', function(){
		expect(split([3,2,29,10,7,37,14,22])).toEqual([[3,2,29,10],[7,37,14,22]]);
	});

	it ('is able to handle an odd # of elements in the array', function(){
		expect(split([3,2,29,10,7,37,14])).toEqual([[3,2,29],[10,7,37,14]])
	});

});

describe ('Merge Sort', function(){
	it('is able to merge two sorted arrays into one sorted array', function(){
		expect(merge([2, 3, 10, 29],[7, 14,22,37])).toEqual([2,3,7,10,14,22,29,37])
	});
})