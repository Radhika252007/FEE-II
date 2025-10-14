const value = parseInt(prompt('Enter the Value:'));
const value2 = parseInt(prompt('Enter the Value 2:'));
let k = 0;
for(let i = 1;i*i<=value && k<value2;i++){
    if(value%i==0){
        console.log(i);
    }
    k++;
}