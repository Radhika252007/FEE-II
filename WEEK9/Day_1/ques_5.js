function rotateArr(arr, k){
    k = k%arr.length;
    let temp = [];
    for(let i=0;i<k;i++){
        temp.push(arr[i]);
    }
    let j = 0;
    for(let i = k;i<arr.length;i++){
        arr[j++] = arr[i];
    }
    for(let i=0;i<k;i++){
        arr[j++] = temp[i];
    }
    return arr;
}
console.log(rotateArr([1,2,3,4,5],2));