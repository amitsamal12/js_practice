// const Api="https://jsonplaceholder.typicode.com/todos/1";

// const user=fetch(Api);
// console.log(user);

// user.then(function(res){
//     console.log(res);
// })

const promise1 = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve("p1 is resolved");
  }, 3000);
});
promise1.then((res) => {
  console.log(res);
});

const promise2 = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve("p2 is resolved");
  }, 1000);
});
promise2.then((res) => {
  console.log(res);
});

const promise3 = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve("p3 is resolved");
  }, 2000);
});
promise3.then((res) => {
  console.log(res);
});

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
