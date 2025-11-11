// 동기란? -> 여러 개의 작업이 있을 때 순서대로 한 번에 하나씩 처리하는 방식
// 비동기란? -> 여러 개의 작업이 있을 때 순서대로 처리하지 않는 방식

// 동기적 실행
console.log(1);
console.log(2);
console.log(3);
// 1 2 3 출력

// 비동기적 실행 -> 비동기 작업들은 Web APIs 라는 브라우저가 관리하는 공간에서 실행 됨
console.log(4);
setTimeout(() => {
  console.log(5);
}, 3000);
console.log(6);
// 4 6 (3000ms 후) 5 출력
