// 1. async
// -> 함수 앞에 붙이는 키워드
// -> 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return {
    name: "도서",
    id: "doseo",
  };
}

console.log(getData());

// 애초에 이렇게 Promise를 반환하고 있는 비동기 함수였다면,
// async 키워드가 별다른 일을 하지 않고 Promise가 반환되도록 내버려둠
async function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이도서",
        id: "leedoseo",
      });
    }, 2000);
  });
}
console.log(getData1);

// await
// -> async 함수 내부에서만 사용 가능한 키워드
// -> 비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//     getData1().then((result)=>{
//         console.log(result);
//     });
// }

// printData();

// 위 코드를 이렇게 짧게 줄일 수 있음.
async function printData() {
  const data = await getData1();
  console.log(data);
}

printData();
