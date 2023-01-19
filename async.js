// //1
// async function f1() {
//     let promise = new Promise((resolve, reject) => {
//         resolve(123)
//     })
//     let data = await promise
//     console.log(data);
// }
// f1()

// //2
// async function f2(){
// let bangaloreWeather = new Promise((resolve, reject) => {
//     resolve(17," C")
// })
// let puneWeather = new Promise((resolve, reject) => {
//     resolve(17," C")
// })
// let bangaloretemp = await bangaloreWeather
// let punetemp = await puneWeather
// return [bangaloretemp,punetemp]
// }
// let temperature = f2()
// console.log(temperature);

// //3
// async function f3(){
//     let bangaloreWeather = new Promise((resolve, reject) => {
//        setTimeout(() => 
//         resolve(22)
//        , 1000); 
       
//     })
//     let puneWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//          resolve(212)
//         }, 4000); 
//     })

//     let bangaloretemp = await bangaloreWeather
//     console.log("Fetched Bangalore temperature "+bangaloretemp);
//     let punetemp = await puneWeather
//     console.log("Fetched Pune temperature "+punetemp);
//     return [bangaloretemp,punetemp]
//     }

// let data = f3()
// console.log(data);

// //4 To show what if async and await not used in promise
// function f3(){
//     let bangaloreWeather = new Promise((resolve, reject) => {
//        setTimeout(() => 
//         resolve(22)
//        , 1000); 
       
//     })
//     let puneWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//          resolve(212)
//         }, 4000); 
//     })

//     let bangaloretemp =  bangaloreWeather
//     console.log("Fetched Bangalore temperature "+bangaloretemp);
//     let punetemp =  puneWeather
//     console.log("Fetched Pune temperature "+punetemp);
//     return [bangaloretemp,punetemp]
//     }

// let data1 = f3()
// console.log(data);

//5
async function f5(){
    let bangaloreWeather = new Promise((resolve, reject) => {
       setTimeout(() => 
        resolve(22)
       , 4000); 
       
    })
    let puneWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve(212)
        }, 1000); 
    })
    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
         resolve(212)
        }, 1000); 
    })


    let bangaloretemp = await bangaloreWeather
    console.log("Fetched Bangalore temperature "+bangaloretemp);
    let punetemp = await puneWeather
    console.log("Fetched Pune temperature "+punetemp);
    let mumtemp = await puneWeather
    console.log("Fetched Mumbai temperature "+mumtemp);
    return [bangaloretemp,punetemp,mumtemp]
    }

let datatemp = f5()
console.log(datatemp);