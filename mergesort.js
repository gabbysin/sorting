function split(wholeArray){
	let firstHalf, secondHalf;
	if (wholeArray.length%2===0){
		firstHalf = wholeArray.slice(0, wholeArray.length/2);
		secondHalf = wholeArray.slice(wholeArray.length/2);
	} else {
		firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length/2));
		secondHalf = wholeArray.slice(Math.floor(wholeArray.length/2));
	}
	//console.log(firstHalf, secondHalf);
	return [firstHalf, secondHalf];
} 

function merge(arr1, arr2){
	let newArr = [];
	while (arr1.length>=1 && arr2.length>=1) {
		if (arr1[0]>arr2[0]){
			newArr.push(arr2.shift());
		} else {
			newArr.push(arr1.shift());
		}
	}

	return newArr.concat(arr1.concat(arr2));
 //(typeof arr2.shift() === 'undefined') ? return newArr.concat(arr1) : return newArr.concat(arr2);
} 

function mergeSort(arr){
	if (arr.lenghth < 2)
		return arr;
	var splits = split(arr);
		left = splits[0];
		right = splits[1];
	return merge(mergeSort(left), mergeSort(right));
};