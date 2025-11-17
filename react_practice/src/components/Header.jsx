// 컴포넌트를 생성하는 이름 첫번째 글자는 대문자로!
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

// const = Header() => { 이렇게 화살표 함수로도 가능! 편한거 사용!
//   return (
//     <header>
//       <hi>header</hi>
//     </header>
//   );
// }
export default Header;
