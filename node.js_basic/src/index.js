// CJS 이용
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 위 코드를 객체 구조분해 할당을 사용하면 이렇게 사용 가능
const { add, sub } = require("./math");

console.log(add(1, 2));
console.log(sub(1, 2));
