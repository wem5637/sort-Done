function mergeSort(array) {


    if (array.length < 2) {
        return array;
    }


    var left = mergeSort(split(array)[0]);
    var right = mergeSort(split(array)[1]);
    var sortArr = merge(left, right);

    return sortArr;


}


function merge(arr1, arr2) {
    var result = [];

    while (arr1.length && arr2.length) {

        if (arr1[0] < arr2[0]) {
            result.push(arr1.shift());


        } else {
            result.push(arr2.shift());


        }
    }


    result = result.concat(arr2.concat(arr1));

    return result;
}

function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */

    var slicePoint = Math.ceil(wholeArray.length / 2);
    var firstHalf = wholeArray.slice(0, slicePoint);
    var secondHalf = wholeArray.slice(slicePoint);



    return [firstHalf, secondHalf];
}
