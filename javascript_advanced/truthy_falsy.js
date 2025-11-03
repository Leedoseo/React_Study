// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy"); // falsy
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}

// 3. 활용 사례

function printName(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person); // undefined 출력

// 위 코드를 truthy와 falsy를 활용해서 줄여보면
function printName(person1) {
  if (!person1) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person1.name);
}

let person1 = { name: "도서" }; // let person; || person = null; 일 경우 -> person의 값이 없음 출력
printName(person1);
