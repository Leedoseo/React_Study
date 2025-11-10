// 6가지의 요소 조작 메서드

// 1. push
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);

console.log(arr1);
console.log(newLength);

// 2. pop
// -> 배열의 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

console.log(arr2);
console.log(popedItem);

// 3. shift (push, pop보다 느리게 동작)
// -> 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(arr3);
console.log(shiftedItem);

// 4. unshift (push, pop보다 느리게 동작)
// -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(arr4);
console.log(newLength2);

// 5. slice
// -> 배열의 특정 범위를 잘라내서 새로운 배열로 반환, 원본 배열의 값이 변하진 않음
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(1, 4); // -> 1번 인덱스부터 4번 인덱스 전까지 라는 의미.
let sliced2 = arr5.slice(1); // 두번째 인수를 생략하면 1번부터 끝까지 자르겠다는 의미
let sliced3 = arr5.slice(-2); // 뒤에서부터 2개를 자른다는 의미

console.log(arr5);
console.log(sliced);
console.log(sliced2);
console.log(sliced3);

// 6. concat
// -> 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);

console.log(concatedArr);
