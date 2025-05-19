//Promise

// let promise=new Promise((resolve, reject) =>{

//      console.log("Promise"); 
//     //resolve('success');
//     reject("error");
// })
// promise.then((res)=>{
//     console.log("hey");
    
// });
// promise.catch((err)=>{
// console.log("err");
    
// })

//promise Chaining....

function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("hello 1");
            resolve("Success");
        },4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("hello 2");
            resolve("Success 2");
        },4000);
    });
}



console.log("getting data 1");

let p1=asyncFunc1();
p1.then((res)=>{
    console.log(res);
    let p2=asyncFunc2();
    p2.then((res)=>{
        console.log(res);
        
    })
    
})