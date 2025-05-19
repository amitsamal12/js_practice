function getData(dataId ,getNextdata){
setTimeout(()=>{
    console.log("data" ,dataId);
    //console.log(getNextdata);
    
    if(getNextdata){
        getNextdata();
    }
},1000);

}
getData(1 ,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4)
        })
    })
});






















// function getData(dataId ,getNextdata){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         getNextdata();    
//     },1000);
//     }
    
//     getData(1 ,()=>{
//         getData(2)
//     });
