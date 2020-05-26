
//For example, calling FB API
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

//For example, calling twitter API
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

Promise.all([promise1, promise2])
    .then(result => console.log(result));

Promise.race([promise1, promise2])
    .then(result => console.log(result));