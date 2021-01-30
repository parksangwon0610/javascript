
/**
 * 반복문 for
 * 
 */
const array = [1, 2, 3,];
console.log(array[1]);

// 1
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}







// 2
for(const element of array) {
    console.log(element);
}









// 3
console.log('////// 3');
// 3-1
array.forEach(function(element) {
    console.log(element);
})
// 3-2
function log(element) {
    console.log(element);
}
array.forEach(log);
// 3-3
array.forEach(element => console.log(element));



// 4
console.log('/////// 4')
const objArray = [{a: 1}, {a: 2}, {a: 3}];
console.log(objArray[1]);

for(const element of objArray) {
    console.log(element);
}





// 5
const obj = {
    a:1,
    b:2, 
    c:3
};
for(const element in obj) {
    console.log(element);
}

// 6
for(const key in obj) {
    const value = obj[key];
    console.log(value);
}

