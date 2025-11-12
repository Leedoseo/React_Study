// CJS 이용
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 위 코드를 객체 구조분해 할당을 사용하면 이렇게 사용 가능
// const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));

// ES 모듈 이용
// 1. 기본 import 방식
import multiply from "./math.js";
import { add, sub } from "./math.js";

console.log("=== 기본 import ===");
console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(multiply(3, 4)); // 12

// 2. 별칭(alias) 사용
import { add as plus, sub as minus } from "./math.js";

console.log("\n=== 별칭 사용 ===");
console.log(plus(5, 3)); // 8
console.log(minus(5, 3)); // 2

// 3. 모든 Named Export를 한 번에 가져오기
import * as math from "./math.js";

console.log("\n=== 전체 import (*) ===");
console.log(math.add(10, 5)); // 15
console.log(math.sub(10, 5)); // 5
console.log(math.default(2, 6)); // 12 (default export는 .default로 접근)

// 4. 새로 추가된 함수들 사용
import { divide, power, PI } from "./math.js";

console.log("\n=== 추가 함수들 ===");
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // "0으로 나눌 수 없습니다"
console.log(power(2, 3)); // 8
console.log(PI); // 3.14159

// 5. Default와 Named Export 동시에 import
import multiply2, { add as addition, divide as div } from "./math.js";

console.log("\n=== Default + Named 동시 import ===");
console.log(multiply2(4, 5)); // 20
console.log(addition(100, 200)); // 300
console.log(div(20, 4)); // 5
