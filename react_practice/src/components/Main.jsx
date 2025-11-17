// JSX 주의 사항
// 1. 중괄호 내부에는 JS 표현식만 넣을 수 있음.
// 2. 숫자, 문자열, 배열 값만 렌더링 됨.
// 3. 모든 태그는 닫혀있어야 함
// 4. 최상위 태그는 반드시 하나여야만 함
const Main = () => {
  const number = 10;

  return (
    <main>
      <h1>main</h1>
      <h1>{number}</h1>
      <h1>{number + 10}</h1>
      <h1>{number % 2 === 0? "짝수"  : "홀수"}</h1>
    </main>
  );
};

export default Main;
