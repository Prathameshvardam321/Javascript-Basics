//synchronous 
console.log("Line 1 executed");
console.log("Line 2 executed");
console.log("Line 3 executed");

//Asynchronous
let date = new Date()
console.log("Line 1 executed",date.toLocaleTimeString());
setTimeout(() => {
    let date1 = new Date()
    console.log("Line 2 executed",date1.toLocaleTimeString());   
}, 3000);
console.log("Line 3 executed",date.toLocaleTimeString());

//3
function f1(name,callBack) {
    console.log("My name is ",name);
    callBack()
}
function callme() {
    console.log("Hii I am CallBack function");
}
f1("Prathmesh",callme)


//4
function f2(callme1) {
    console.log("Hii f2");
    callme1()
}
function callme1() {
    console.log("Hii I am CallBack function");
}

// setTimeout(f2(callme),2000)

f2(callme1)


//5
function f4(data,callBack) {
    console.log(data);
    callBack()
}
f4(12,callme1)
