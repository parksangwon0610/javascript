/**
 * array method
 * filter
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
        // age: 22,
        local: {
            address: 'seoul'
        }
    },
    {
        name: 'haha',
        age: 21,
        local: {
            address: 'busan'
        }
    }
]
console.log('members', members);

// Array.filter(맴버 => 조건이 참일 때 멤버를 리턴)
// == ===  1 == '1' true, 1 === '1' false 
const filterMember = members.filter(member => member.local.address === 'seoul' || member.local.address === 'songdo');
console.log("🚀 ~ filterMember", filterMember);
const member = members.map(member => member.age);
console.log("🚀 ~ member", member);

const memberAge = members.map(member => member.age)
                    .filter(element => element !== undefined);
console.log("🚀 ~ memberAge", memberAge);

// for for...of for...in forEach, find, map, filter