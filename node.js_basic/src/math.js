// 덧셈 뺄셈 모듈

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// CommonJS
// module.exports = {
//   add /*: add,*/, // value의 값으로 사용되는 변수의 이름과 키 값이 같을 경우 생략 가능
//   sub /*: sub,*/,
// };

// ES 모듈
// export { add, sub }; - ES 모듈 기본

// 위 덧셈 뺄셈 모듈을 이렇게 export로 붙여서 사용가능
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// math 모듈을 대표하는 단 하나의 기본값 - default
export default function multiply(a, b) {
  return a * b;
}

// 추가 예시 함수들
export function divide(a, b) {
  if (b === 0) {
    return "0으로 나눌 수 없습니다";
  }
  return a / b;
}

export function power(a, b) {
  return Math.pow(a, b);
}

// 상수 export
export const PI = 3.14159;
