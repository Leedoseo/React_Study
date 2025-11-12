// 덧셈 뺄셈 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {
  add /*: add,*/, // value의 값으로 사용되는 변수의 이름과 키 값이 같을 경우 생략 가능
  sub /*: sub,*/,
};
