var totalCount=0;

// function bubbleSort(arr){
//     var swapCount;
    
//     //first test for empty array
//     if (!arr[0]){
//         return arr
//     } else if(arr.filter(function(x){return typeof(x) !== 'integer'}).length > 0){
//         return 'Cannot sort an array of different types'
//     } else {
//         if(swapCount === 0){
//             return arr
//         } else {
//             if (arr[0]<arr[1]){
//                 totalCount += 1;
//                 return arr[0] + bubbleSort(arr.slice(1))
//             } else {
//                 arr = swap(arr[0], arr[1])+arr.slice(2);
//                 totalCount += 1;
//                 swapCount += 1
//                 return arr[0] + bubbleSort(arr.slice(1))
//             }
//         }
//     }
// }

function bubbleSort(arr){

    
    var unsortedArr = arr.length;

    if(arr.filter(function(x){return typeof(x) !== 'number'}).length > 0){
        return 'Cannot sort an array of different types'
    }
    for (var i=unsortedArr; i>1; i--){
        for (var j=0; j<unsortedArr; j++){
            // if (typeof(arr[j]) !== ''){

            // }
            if (arr[j]>arr[j+1]){
                arr = arr.slice(0,j).concat(swap(arr[j], arr[j+1]).concat(arr.slice(j+2)))

            }
        }
        //unsortedArr -= 1
    }
    return arr
}

// COMMMENT!


var swap = function(a, b){
    return [b,a]
}
