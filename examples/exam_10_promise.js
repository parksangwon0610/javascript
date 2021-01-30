console.log('1');

setTimeout(function() {
    console.log('2');
}, 1000);

console.log('3');


const p = (value) => { 
    return new Promise((resolve, reject) => {
        // ...logic
        setTimeout(() => { // == data query
            if(value) {
                resolve('promise success!!');
            } else {
                reject('promise failed!!');
            }
        }, 2 * 1000);
    })
}

p(true)
    .then(result => {
        console.log('1 ' + result);
        return p(true);
    })
    .then(result => {
        console.log('2 ' + result);
        return p(true);
    })
    .then(result => {
        return p(true);
    })
    .catch(result => {
        return p(true);
    })
    .then(result => {

    })