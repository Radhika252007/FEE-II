console.log("Hello");

const pr = new Promise((resolve,reject)=>{
    const a = 10;
    if(a<20){
        resolve("It works");
    }
    else{
        reject("Error comes");
    }
});
pr.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("Hello 2");
