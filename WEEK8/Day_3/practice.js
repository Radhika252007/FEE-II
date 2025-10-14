const obj = new Object();
// singleton
const obj2 = {};
// non-singleton

const mySym = Symbol("key");
const newObj = {
    name : "Radhika",
    age : 18,
    [mySym]: "key",
    email : "radhikamadaan42@gmail.com",
    add: function(a,b){
        return (a+b);
    }
};
console.log(newObj.name);
console.log(newObj.age);
console.log(newObj[mySym]);

newObj.password = "11123";
console.log(newObj);
console.log(newObj.add(3,4));
newObj.anotherGreet = function(){
    console.log('Hello '+ this.name);
}
newObj.anotherGreet();

const target = { a: 1, b: 3};
const source = {
    a: 4, b: 7
}
// const result = Object.assign(target,source);
// console.log(result);
// console.log(target== result);
const result2 = { ...target,...source};
console.log(result2);
console.log(Object.keys(result2));
console.log(Object.values(result2));
console.log(Object.entries(result2));