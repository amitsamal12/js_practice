const arr=[10,20,30,40,50];

//Sliced()
// const sliced=arr.slice(1,4)
// console.log(sliced);

//Spliced()
// const spliced=arr.splice(2,3);
// console.log(spliced);

// forEach()
//  arr.forEach((ele)=>{
//     console.log(ele*2);
//  })

//map()
const res=arr.map((ele)=>{
    return ele*2;
})

console.log(res);
