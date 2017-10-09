function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Invalid inputs');
        }
    });
}

addPromise(3, 4).then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
});


addPromise(3, 'hello').then(function (temp) {
    console.log('this should not show up!');
}, function (err) {
    console.log('this should appear: ', err);
});