console.log("Welcome first line",new Date().getSeconds());

setTimeout(()=>{
    console.log("Function after 5 sec",new Date().getSeconds());
},5000)

setTimeout(()=>{
    console.log("Function after 2 sec",new Date().getSeconds());
},2000)

console.log("Welocme last line",new Date().getSeconds());