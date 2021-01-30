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
    },
    {
        name: 'haha',
        age: 21,
        local: {
            address: 'busan'
        }
    },
    {
        name: 'chloe',
        age: 22,
        local: {
            address: 'seoul'
        }
    },
    {
        name: 'suncheol',
        age: 23,
        local: {
            address: 'seoul'
        }
    },
    {
        name: 'hojun',
        age: 21,
        local: {
            address: 'busan'
        }
    },
    {
        name: 'kibong',
        age: 20,
        local: {
            address: 'sungnam'
        }
    },
    {
        name: 'junkoo',
        age: 25,
        local: {
            address: 'deajeon'
        }
    },
    {
        name: 'jueun',
        age: 21,
        local: {
            address: 'seoul'
        }
    },
]


console.log(members);


/** 
 *  1. 사용자들의 나이의 평균값을 구하세요. 더하기는 a = b + c , b += c 등을 찾아보시고 사용해보세요 
 *  결과 -> 평균나이: 22.2
 */
let total = 0;
members.forEach(member => {
    total += member.age;
    return total;
})
const avg = total / members.length;
console.log('평균나이:',avg);


/**
 * 2. 나이가 24세 이상의 사람의 이름만 배열로 출력하세요 
 * 결과 -> 24세 이상인 사람들은 :  [ 'changbum', 'junkoo' ]
 */
const names = members.filter(member => member.age >= 24)
    .map(member => member.name);
console.log('24세 이상인 사람들은 : ', names);

/** 
 * 3. 모든 멤버의 지역 분포를 구하여 새로운 분포 데이터로 이루어진 객체를 생성해보세요. 
 * 객체의 프로퍼티 순서는 무시하세요. 
 * 결과 : { songdo: 1, namyangju: 1, seoul: 4, busan: 2, sungnam: 1, deajeon: 1 }
 * 
let distribution = {};
... 구현 
console.log(distribution);
 */

let distribution = {};
members.forEach(member => {
    const address = member.local.address;
    const count = distribution[address];
    distribution[address] = count ? count + 1 : 1;
})
console.log(distribution);