welcome=()=>{
    console.log("Welcome");
}

const f1=() =>{
console.log("f1");
}

 f2=(a)=> {
    console.log("f2");
    return a
}

welcome()
f1()
let k = f2(12)
console.log(k);