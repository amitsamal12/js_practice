async function getData(){
    return "Amit"
};
const userdata=getData();
console.log(userdata);

userdata.then((res)=>console.log(res));
