/**
 * 변수 선언? var let const
 * 
 * var : es5 문법 , 함수 스코프, value 변경가능
 * let const : es6 문법, 블록 스코프 , let 만 value 변경가능
 */

var v = 1;
{
    var v =2;
    console.log('local Scope value', v);
}
console.log('global scope value', v);
console.log('1 번');
var a = 1;
{
    var a = 2;
}
console.log(a, 'why? 함수 스코프이기 때문에 a는 2로 할당됨');


console.log('\n2 번');
var b = 1;
function funcb() {
    var b = 2;
    console.log(b, 'why? 함수 스코프인 b 는 함수내에서 새로운 b변수로 할당됨');
}
funcb();
console.log(b, 'why? 함수 내에서 선언된 b는 함수 내에서만 유효하기 때문에 함수 외부 전역레벨의 b 가 출력됨');


console.log('\n3 번');
let c = 1;
{
    let c =2;
    console.log('c in block',c);
}
function func_C() {
    let c = 3;
    console.log('c in func_C',c)
}
console.log('c in global', c); 
func_C();
console.log('why? let 은 블록 스코프이기 때문에 블록(함수도 블록)내 변수와 전역 변수 c 는 다르게 할당된다.');

console.log('\n4 번');
const d =1;
// d =2; // Error!!!
console.log('d 에 새로운 리터럴 값 을 넣으려고하면 const 는 오류를 리턴한다. const 는 상수의 개념');


var n = 1;
{
    console.log(n);
    var n = 2;
    console.log(n);
}
