
const promise1 = (value) => { 
    return new Promise((resolve, reject) => {
        // ...logic
        setTimeout(() => { // == data query
            value  
            ? resolve(console.log('promise success!!'))
            : reject(console.log('promise failed!!'));
        }, 2 * 1000);
    })
};

promise1(true)
    .then(result => {
        result;
        return promise1(true);
    })
    .then(result => {
        result;
    });
    .then(result => {

    })
    .then()

// 2 ES7
const asyncFunction = async () => {
    return 'this is promise!';
}

asyncFunction().then(console.log);

asyncFunction()
.then(result =>{
    console.log('1 : ' + result);
    return asyncFunction();
})
.then(result => {
    console.log('2 : ' + result);
    return asyncFunction();
})

function1(true)
    .then(result => {
        result;
    })


// //3

const delay = (sec) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            // console.log('delay ' + sec + 'sec' + ', time:' + Number(new Date()));
            resolve('delay ' + sec + 'sec' + ', time:' + new Date());
        }, sec * 1000);
    });
}
const getString = async () => {
    delay(3)
    .then(result => {
        console.log(result);
        return delay(2);
    })
    .then(result => {
        console.log(result);
        return delay(1);
    })
    .then(result => {
        console.log(result);
    })
    
    console.log(await delay(2));
    console.log(await delay(1));
    console.log(await delay(0));
}
getString();




