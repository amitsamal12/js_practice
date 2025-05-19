let url = "https://hp-api.onrender.com/api/characters";
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
    
})
.then((data)=>{
    console.log(data);
    
})
.catch((err)=>{
    console.log(err);

})


