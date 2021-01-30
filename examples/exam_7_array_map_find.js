/**
 * array method
 * map,find
 */

const members = [
    {
        name: 'changbum',
        age: 24,
        local: {
            address: 'songdo'
        }
    },
    {
        name: 'sangwon',
        age: 23,
        local: {
            address: 'namyangju'
        }
    },
    {
        name: 'kwanghoo',
        age: 22,
        local: {
            address: 'seoul'
        }
    }
]

members.forEach(element => console.log(element)); // 모든 원소를 순회하면서 출력!

const names = members.map(member => member.name); // 배열 객체들의 이름만 뽑아서 새로운 배열로 만들어줍니다
const ageList = members.map(member => member.age); // 배열 객체들의 나이만 뽑아서 새로운 배열로 만들어줍니다. 
// const names = members.map(member => {
//     return member.name
// });
// 이렇게 풀어쓴 코드와 동일한 기능입니다. 이 코드에서 알 수 있는것은 리턴시킨 값으로 새로운 배열을 만드는 것입니다. 


console.log(names);
console.log(ageList);

const foundMember = members.find(member => (member.local.address === 'songdo')); // 조건에 부합하는 최초의 원소만 리턴합니다. 즉 객체는 하나만 리턴됩니다.:
console.log(foundMember);

// .filter .reduce;

