// 객체

const home = {
    address: 'seoul'
};
const language = ['KO', 'EN']
const user = {
    name: 'sangwon',
    age: 20,
    language: language,
    local: home,
    a: null
};
console.log('user', user);
const user2 = user;
user2.age = 21;

const temp = {a: 10, ...user};
console.log('temp', temp);

function getName(user) {
    console.log(user.local.address);
}

getName(user)