// 1. 스코프
// -> 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함.
// -> 전역 스코프 / 지역스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // b라는 변수는 지역 스코프
  console.log(a);

  function funcB() {} // 지역 스코프
}

funcA();
// console.log(b); -> 오류 발생!
// console.log(funcB); -> 오류 발생! 함수 선언식만 오류 발생!

if (true) {
  let c = 1; // c라는 변수는 지역 스코프

  function funcC() {} // 전역 스코프
}

console.log(funcC); // 이건 오류가 발생하지 않음!

for (let i = 0; i < 10; i++) {
  let d = 1;

  function funcD() {} // 전역 스코프
}

// console.log(d); -> 오류 발생!
console.log(funcD); // 이건 오류가 발생하지 않음!
