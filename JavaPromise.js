//example 1
let myPromise = new Promise((resolve,reject)=>{
    let k = 10
    if(k==0){
        resolve("Succesfull")
    }else{
        reject("Rejected")
    }
})

myPromise.then((data)=>{
    console.log(data);
}).catch((er)=>{
    console.log(er);
})

//example2
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("Promise is fulfilled and resolved");
        resolve(true)
    }, 4000);
})
p1.then((data)=>{
    console.log(data);
})

//exapmle3
let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("Promise is fulfilled and rejected");
        reject(new Error("Error occured"))
    }, 4000);
}).catch((e)=>{
    console.log("Error");
})

//example4
let p4 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("Promise is fulfilled and resolved");
        resolve(true)
    }, 4000);
}).then((data)=>{
    console.log(data);
}).catch((Error)=>{
    console.log("Error found");
})

//example5
let p5 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("Promise is fulfilled and resolved");
        resolve(true)
    }, 4000);
}).then((value)=>{
    console.log(value);
    let p = new Promise((resolve,reject)=>{
        resolve("Finished ")
    })
    return p
}).then((value)=>{
    console.log(value);
})