// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // => 21
// let num6 = (1 + 2) * 10; => 30
console.log(num6); // 곱셈이 우선 순위, ()가 있다면 ()가 우선순위

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; // num7에 20을 더하고 값을 출력, 풀어쓰면? -> num7 = num7 + 20 이라는 뜻
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;
console.log(num7);

// 4. 증감 연산자 (1씩 늘리거나 줄일 때 사용)
let num8 = 10;
console.log(++num8); // 전위 연산 -> 11 바로 1을 추가해서 11
console.log(num8++); // 후위 연산 -> 11 1은 이 이후에 더해지기 때문에 아직은 11
console.log(num8) // 후위 연산이 끝난 후인 12출력

// 5. 논리 연산자
let or = true || false; // 둘 중 하나만 참이면 true
let and = true && false; // 둘 다 참이여야지 true,
let not = !true; // !false / true의 not 인 false

console.log(or, and, not);

// 6. 비교 연산자
// ==가 아닌 왜 ===를 쓰는지?
// -> ==는 값만 같은지를 파악
// -> ===는 자료형까지 파악

let comp1 = 1 === 2; // 1과 2가 같은지 "false"
let comp2 = 1 !== 2; // 1과 2과 다른지 "true"
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);

// 7. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefine가 아닌 값을 찾아내는 연산자
let doseo1;
let doseo2 = 10;
let doseo3 = 20;

let doseo4 = doseo1 ?? doseo2; // 여기서는 doseo1가 undefined, doseo2는 10이기 때문에 10이 출력
console.log(doseo4); // 10

let doseo5 = doseo1 ?? doseo3;
console.log(doseo5); // 20

let doseo6 = doseo2 ?? doseo3; // 둘 다 값이 존재하면 앞의 값을 출력
console.log(doseo6); // => 10

// 회원관리 시스템을 가정해서 해봄
let userName = "도서";
let userNickName = "이도서";

let displayName = userName ?? userNickName;
console.log(displayName); // 도서

// 8. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let doseo7 = 1;
doseo7 = "hello";

let t1 = typeof doseo7;
console.log(t1); // String 출력

// 9. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let doseo8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀";
let res = doseo8 % 2 === 0 ? "짝수" : "홀수";
// var8 % 2 === 0 -> 조건식
// 콜론을 기준으로 왼쪽은 참, 오른쪽은 거짓
// -> var8가 2로 나누었을 때 0으로 떨어지면 짝수, 아니라면 홀수 출력
console.log(res); // 짝수 출력
