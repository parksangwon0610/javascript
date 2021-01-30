// 객체 구조 분해 할당 

const user = {
    name: 'changbum',
    age: 20,
    local: {
        address: 'seoul'
    }
};

const { name } = {name: "sample"};

const {
    name: name2,
    age,
    local
} = user;

const {
    name: name3,
} = user;

// const a = function aFunc(person) {
//     person.name = 'sangwon';
//     return person;
// }

// const {
//     name,
//     age
// } = a(user);

// console.log(name, age);

// const b = [1, 2, 3];
// const d = [...b];
// console.log('d', d);

// const userA = user; // 같은 객체를 참조하고 있기 떄문에 참조하는거
const userA = {...user}; // 분해 할당
userA.name = 'sangwon'
console.log(user);
console.log(userA);



