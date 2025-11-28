// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);
varA();

let varB = function () {
  // 익명 함수
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};

console.log(varC()); // 1

let varD = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varD(10));

// 값을 바로 반환한다라는 가정하에
// let varC = () => 1; 이렇게 줄이는 것도 가능

let varE = (value) => value + 1;
console.log(varE(10)); // 11
