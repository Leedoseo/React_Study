// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four /* = 4*/] = arr;
console.log(one, two, three, four); // 1 2 3 undefined (4)

// 2. 객체의 구조 분해 할당
let person = {
  name: "도서",
  age: 28,
  hobby: "게임",
};

let {
  name,
  age, // age: myAge도 가능!
  hobby,
  extra /*= "hello"*/,
} = person;
console.log(name, age /* myAge */, hobby, extra); // 도서 28 게임 undefined (hello)

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
