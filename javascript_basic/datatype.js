// 1. Number Type
let num1 = 28;
let num2 = 1.5;
let num3 = -20;

// 사칙연산 가능
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN; // Not a Number -> 수치연산이 실패했을때 결과값으로 사용됨

// 2. String Type
let myName = "이도서";
let myLocation = "경기";
let introduce = myName + myLocation; // 문자열 덧셈연산이 가능!

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // ``${변수의 값}을 동적으로 집어넣을 수 있음

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다 명시적으로 선언)
let empty = null;

// 5. Undefined Type (비어있다라는 값이 자동으로 할당)
let none;
console.log(none);
