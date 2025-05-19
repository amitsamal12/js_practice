let url ="https://hp-api.onrender.com/api/characters";

async function getFacts(){
    let res =  await fetch(url);
    let data = await res.json();
    console.log(data);
    
    console.log(res);
    
}