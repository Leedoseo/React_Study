// 1. 함수 선언
function greeting() {
  console.log("안녕하세요");
}

console.log("호출 전");
greeting(); // 함수 호출
console.log("호출 후");

function getArea(width, height) {
  function another() {
    // 함수 안에 다른 함수를 선언하는 것도 가능 -> "중첩 함수"라고 부름
    console.log("another");
  }
  another();
  // () 안에 있는 것들을 매개변수 라고부름
  let area = width * height;

  return area; // 여기서 코드가 끝나게 되므로 아래에 코드를 작성해도 실행되지 않음
  // console.log("끝났음") -> 실행 안됨
}
// getArea(20, 20); () 안에 있는 것들을 인수라고 부름

let area1 = getArea(30, 30);
console.log(area1);

// 호출을 먼저하고 함수를 선언해도 오류가 발생하지 않음. -> 호이스팅
