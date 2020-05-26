const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(1); // Pending state => resolved, fulfiled
        reject(new Error('message')); //pending => rejected
    }, 2000)
    
    //
});

promise.then(result => console.log('Result', result))
        .catch(error => console.log('Error', error.message));