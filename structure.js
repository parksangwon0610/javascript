const a = {
	value1: 'testValue1',
	value2: null
}

const b = {...a, value2: 'updateValue2'};
console.log('b' , b);

const c = {value2: 'updateValue2', ...a};
console.log('c' , c);
