console.log('1');

setTimeout(function() {
    console.log('2');
}, 1000);

console.log('3');


const p = (value, time) => { 
    return new Promise((resolve, reject) => {
        // ...logic
        setTimeout(() => { // == data query
            if(value) {
                resolve('promise success!!');
            } else {
                reject('promise failed!!');
            }
        }, time * 1000);
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
        console.log('3 ' + result);
        return p(true);
    })

p(true, 1)
    .then(result => {
        console.log('1 ' + result);
        return p(true, 1);
    })
    .then(result => {
        console.log('2 ' + result);
        p(false, 1)
            .catch(error =>{
                console.log('3 ' + error);
                return p(true, 1);
            })
            .then(result => {
                console.log('4 ' + result);
            })
        return p(true, 1);
    })
    .then(result => {
        console.log('5 ' + result);
        return p(true, 1);
    })