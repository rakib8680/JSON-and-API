

const mobile = { brand: 'huawei', model: 'mate 40 pro', expensive: true, price: 70000 };

const allKeys = Object.keys(mobile);
const allValues = Object.values(mobile);
const paris = Object.entries(mobile);
// console.log(paris)
// console.log(`${allKeys} 
// ${allValues}`);

console.log(mobile);
// Object.seal(mobile)
// Object.freeze(mobile);
delete mobile.expensive;
console.log(mobile)