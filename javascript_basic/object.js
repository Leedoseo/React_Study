// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 -> 대부분 이 방법을 사용

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "도서", // 객체 속성 -> key : value
  age: 27,
  hobby: "독서",
  job: "개발자",
  extra: {},
  10: 20,
  "like cat": true,
};
// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 존재하지 않는 프로퍼티에 접근하려고 하면 undefined가 출력
console.log(name); // 도서

let age = person["age"]; // ""로 문자열로 작성해야함, 존재하지 않는 프로퍼티에 접근하려고하면 undefined가 출력
console.log(age); // 27

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 독서

// 3.2 새로운 프로퍼티를 추가하는 방법
person.location = "화성시";
person["favoriteFood"] = "라면";

console.log(person);
/*
10: 20
age: 27
extra: {}
favoriteFood: "라면"
hobby: "독서"
job: "개발자"
like cat: true
location: "화성시"
name: "도서"
*/

// 3.3 프로퍼티를 수정하는 방법
person.job = "학생";
person["favoriteFood"] = "떡볶이";
console.log(person);
/*
favoriteFood: "떡볶이"
job: "학생"
*/

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); // true
console.log(result2); // false

// 4. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가 가능
animal.name = "초롱이"; // 수정 가능
delete animal.color; // 삭제 가능

// animal = "123"; -> 아예 새로운 값을 할당하는 것은 안됨!
console.log(animal);

// 5. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person1 = {
  name: "이도서",
  // 메서드 -> 객체의 동작을 정의한다
  sayHi: function () {
    // () => {} 화살표 함수 가능! / sayHi() {} 메서드 선언 가능!
    console.log("안녕!");
  },
};

person1.sayHi();
person1["sayHi"]();
