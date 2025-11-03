// 1. Spread 연산자
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; // ...arr1이 Spread 연산자

console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> 나머지 매개변수라는 뜻
function funcB(/* one */ ...rest) {
  // 0번째 인덱스는 one이라는 매개변수를 넣고싶으면 이렇게 하면됨, 단 ...rest 뒤에는 뭔가를 추가하면 안됨
  console.log(rest);
}

funcB(...arr1);
