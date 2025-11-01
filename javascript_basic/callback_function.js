// 1. 콜백함수 -> 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함

function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

function sub() {
  console.log("this is sub");
}

main(sub); // 출력값 : sub -> 여기에서의 (sub)가 콜백 함수임
// 콜백이라는 뜻은 뒷전에 실행되는 or 나중에 실행되는 뜻임

// 2. 콜백함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5);
repeatDouble(5);

// 위 코드를 아래 처럼 축약 가능
function repeat1(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
} // 함수를 두번 선언하지않고 callback으로 처리하여 하나만 선언하고 호출 때 callback을 적용

repeat1(5, function (idx) {
  console.log(idx);
});
/* repeat(5, (idx) => { 이런식으로 화살표 함수로 사용도 가능!
  console.log(idx);
}); */

repeat1(5, function (idx) {
  console.log(idx * 2);
});
