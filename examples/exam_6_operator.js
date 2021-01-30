// 반복문 과 조건

const age1 = 1;
const age2 = 1;
const age3 = 2;

// if(age1 === age2) {
//     console.log('hello!!');
// } 
age1 === age2 && console.log('이 코드는 위 에 if문과 동일한 의미');
age1 === age3 || console.log(' || 는 조건이 false면 뒷 코드 (이 문장)이 실행됩니다. ');
const user = {
    name : undefined
}

const name = user.name || 'changbum'; // undefiend 는 조건문에서 false로 인식
console.log(name);

// 조건 ? 참 : 거짓
// if(조건) {
//     참
// } else {
//     거짓
// }

if(user.name !== undefined) { //  if(user.name) {  과 같은 의미입니다. 
    console.log('이름 있음')
} else {
    console.log('이름 없음')
}
user.name 
    ? console.log('이름 있음') 
    : console.log('이름 없음')
