import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

// HTML 태그를 반환하는 함수를 "컴포넌트"라고 부름
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식 요소</div>
      </Button>
    </>
  );
} // App(부모 컴포넌트) 아래에 Header(자식 컴포넌트)가 있음
// 제일 위에있는 컴포넌트는 루트 컴포넌트라고 부름

export default App;
