// 5가지 배열 변형 메서드

// 1. filter -> 특정 조건에 의해서 검색시키는 기능이나 카테고리별 필터 같은 기능을 만드는데 사용
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환
let arr1 = [
  { name: "도서", hobby: "코딩" },
  { name: "이도서", hobby: "코딩" },
  { name: "doseo", hobby: "게임" },
];

const gamePeople = arr1.filter((item) => {
  if (item.hobby === "게임") return true;
});

console.log(gamePeople);

const gamePeople1 = arr1.filter((item) => item.hobby === "게임");

console.log(gamePeople1);

// 2. map
// -> 배열의 모든 요소를 순회하면서, 각각 콜백 함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// -> 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"]; // 숫자로 되어있는 10, 9, 5 이러면 정렬이 정상적으로 이루어지지 않음.
arr3.sort();

console.log(arr3);

let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  // 숫자를 오름차순으로 배치하려면?
  if (a > b) {
    // b가 a 앞에 와야하면
    return 1; // -> b, a 배치
  } else if (a < b) {
    // a가 b 앞에 와야하면
    return -1; // -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 말아야하면
    return 0; // a, b 자리를 그대로
  }
});
console.log(arr4);

let arr5 = [10, 3, 5];
arr5.sort((a, b) => {
  // 숫자를 내림차순으로 배치하려면?
  if (a > b) {
    // b가 a 앞에 와야하면
    return -1; // -> b, a 배치
  } else if (a < b) {
    // a가 b 앞에 와야하면
    return 1; // -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 말아야하면
    return 0; // a, b 자리를 그대로
  }
});
console.log(arr5);

// 4. toSorted
// -> 원본 배열은 그대로 두고 새로운 배열을 반환하는 메서드
let arr6 = ["c", "a", "b"];
const sorted = arr6.toSorted();

console.log(arr6);
console.log(sorted);

// 5. join
// -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr7 = ["hi", "im", "doseo"];
const joined = arr7.join(" ");

console.log(joined);
