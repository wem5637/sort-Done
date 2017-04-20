function bubbleSort(arr) {
    var temp;
    var swap = true;
    while(swap) {
    swap = false;
    for(var i = 0; i < arr.length; i++) {
        debugger;
        if(arr[i] > arr[i+1]) {
            temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
            swap = true;
        }
    }
    }
    return arr;
}