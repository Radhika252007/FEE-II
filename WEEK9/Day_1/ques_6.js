const arr = [1,2,2,3,4,4];
function countFreq(arr){
const obj = {};
arr.forEach((num)=>{
    if(obj[num]){
        obj[num]++;
    }
    else{
        obj[num] = 1;
    }
});
return obj;
}
console.log(countFreq(arr));
