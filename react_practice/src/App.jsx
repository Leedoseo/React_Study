import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// HTML 태그를 반환하는 함수를 "컴포넌트"라고 부름
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
} // App(부모 컴포넌트) 아래에 Header(자식 컴포넌트)가 있음
// 제일 위에있는 컴포넌트는 루트 컴포넌트라고 부름

export default App;
