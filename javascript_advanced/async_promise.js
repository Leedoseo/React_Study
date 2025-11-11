// Promise -> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수 (기본)
  // executor
  setTimeout(() => {
    console.log("안녕!");
    resolve("안녕!");
    // reject("왜 실패했는지 이유...");
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아님");
    }
  }, 2000);
});

// then 메서드 (resolve 일 때 실행)
// -> promise로 관리하는 비동기 작업의 결과값을 불러올 수 있음
promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  }); // 이렇게 catch 메서드를 뒤에 붙여서 사용하는 것도 가능

// catch 메서드 (then의 실패 버전)
// promise1.catch((error) => {
//   console.log(error);
// });

function add10(num1) {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num1 === "number") {
        resolve(num1 + 10);
      } else {
        reject("num1이 숫자가 아님");
      }
    }, 2000);
  });

  return promise2;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .catch((error) => {
    console.log(error);
  });
