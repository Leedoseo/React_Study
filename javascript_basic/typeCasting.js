// 1. 묵시적 형 변환
// -> JavaScript 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // -> 1020 출력. num이 묵시적으로 str으로 바뀜

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시

// 문자 => 숫자
let str1 = "10";
let strToNum1 = Number(str1);

console.log(10 + strToNum1);

// 숫자+문자 => 숫자
let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자값이 아닌 자료형이 들어간 문자열을 숫자로 바꿔줌. 단, 숫자가 앞에 와있어야 함.
console.log(strToNum2);

// 숫자 => 문자
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");
