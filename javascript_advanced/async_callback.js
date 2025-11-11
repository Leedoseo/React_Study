// 비동기 작업 처리하기 (콜백함수)

function task() {
  setTimeout(() => {
    console.log("안녕!");
  }, 3000);
}

task();

function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 4000);
}

add(1, 2);

// 비동기 작업을 하는 함수의 결과 값을 함수 외부에서 이용하는 방법
function add1(a, b, callback) {
  setTimeout(() => {
    const sum1 = a + b;
    callback(sum1);
  }, 5000);
}

add1(3, 4, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황

// 음식 주문
function orderFood(callback) {
  setTimeout(() => {
    const food = "타코야끼";
    callback(food);
  }, 5000);
}

// 음식이 식음
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

// 음식을 얼림
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 2000);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(food, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
