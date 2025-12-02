// 단락 평가
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // False 함수, false 출력 -> 단락 평가가 작동됨
console.log(returnTrue() && returnFalse()); // True 함수, False 함수, false 출력 -> 단락 평가 작동 X
// -> returnTrue 만으론 첫 번째 피연산자의 값만으론 이 연산의 결과가 확정이 나지 않았기 때문!
console.log(returnFalse() || returnTrue()); // False 함수, True 함수, true 출력
console.log(returnTrue() || returnFalse()); // True 함수, true 출력

function returnFalse1() {
  console.log("False 함수");
  return undefined;
}

function returnTrue1() {
  console.log("True 함수");
  return 10;
}

console.log(returnFalse1() && returnTrue1()); // False 함수, undefined 출력
console.log(returnTrue1() && returnFalse1()); // True 함수, False함수, undefined 출력
console.log(returnFalse1() || returnTrue1()); // False 함수, True 함수, 10 출력
console.log(returnTrue1() || returnFalse1()); // True 함수, 10 출력

// 단락 평가 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

// 위 함수를 단락평가로 줄인 것이 아래 코드
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "도서" });
