// A clouser is when a function remebers its outer scope variables even though the outer scope is finished exectuing

function outest(){
 let c =20;
    function outer(b) {
  let a = 10;
  function inner() {
    console.log(a,"hello",c);
  }
 return inner();
}
return outer();
}
outest();
