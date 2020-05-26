const promise = Promise.resolve({id: 1});
promise.then(result => console.log(result));

const promise2 = Promise.reject(new Error('reason fo rejection...'));
promise2.catch(error => console.log(error));