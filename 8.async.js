// Callback example
function doSomething(callback) {      // callback is a function parameter
    setTimeout(function() { callback("Done"); }, 1000);
}
doSomething(console.log);             // pass console.log as callback

// Promise example
const promiseExample = new Promise(function(resolve, reject) {
    setTimeout(function() { resolve("Promise resolved"); }, 1000);
});
promiseExample.then(console.log);

// Async/Await example
async function asyncFunc() {
    const result = await promiseExample; // wait for promise
    console.log(result);
}
asyncFunc();
