// 동기 비동기 콜백
// 1 콜백의 종류
const func3 = () => console.log('func3');
const func4 = (cb) => cb();

func4(func3);

// 2 콜백의 종류
const func = () => {
    const callbackFunc = () => {
        console.log('callback!!');
    }
    return callbackFunc;
}
func()();

// 3 콜백의 종류
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hello1');
            resolve('hello2');
        }, 100);
    })
}

asyncFunc()
    .then(result => {
        console.log(result)
    });


// 동기 비동기성
console.log('hi');

setTimeout(function() {
    console.log('hello');
}, 0);

console.log('halo');


// 콜백 지옥
const callbackHellFunc = (cb) => {
    return cb();
}

callbackHellFunc(function (param) {
    // ...logic
    return callbackHellFunc(function (param) {
        // ...logic
        return callbackHellFunc(function () {

        })
    })
})