const array = [1, 2, 3, 4, 5, 6];
const initialValue = 10;
const newArray = array.reduce((acc, cur) => 
    (cur % 2 === 0) ? [...acc, cur] : acc
, []);
console.log("🚀 ~ newArray", newArray);

let max = [["0", 0], ["1", 3], ["2", 5], ["3", 5], ["4",2]].reduce(
    ( acc, cur, index) => {
        if(acc[0][1] < cur[1]) {
            acc = [cur];
        } else if (acc[0][1] === cur[1]) {
            acc.push(cur);
        }
        return acc;
    }, [[0,0]]
).map(element => Number(element[0]));
const exported = max.map(element => Number(element[0]));
console.log( max );


let obj = {
    members: [],
    pushTokens: []
}
const follows = [
    {
        member: 'member11',
        pushToken: 'pushToken11'
    },
    {
        member: 'member12',
        pushToken: 'pushToken12'
    },
    {
        member: 'member13',
        pushToken: 'pushToken13'
    },
    {
        member: 'member14',
        pushToken: 'pushToken14'
    },
]

follows.reduce((acc, cur) => {
    acc.members.push(cur.member);
    acc.pushTokens.push(cur.pushToken);
    return acc;
}, obj)