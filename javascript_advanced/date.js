// 1. Data 객체를 생성하는 방법
let date1 = new Date(); // new라는 키워드와 함께 새로운 객체를 생성하는 내장 함수들을 생성자라고 부름 -> ()가 비어있으면 현재 시간을 저장함
console.log(date1);

let date2 = new Date("1998-02-07 10:10:10"); // ""가 없어도 됨
console.log(date2);

// 2. 타임 스탬프
// -> 특정 시간이 "1970-01-01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값 -> UTC(세계 기준 표준시)기준
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date2);

// 3. Date 객체로부터 년, 월, 일 혹은 시, 분, 초 같은 시간 요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth(); /* + 1 */ // 여기서 + 1을 해주면 월이 1월이 1월로 출력됨
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds); // 월은 0부터 시작함 ex) 1월은 0으로 나옴, 12월은 11로 나옴

// 4. 시간 수정하기
date1.setFullYear(1998);
date1.setMonth(1);
date1.setDate(7);
date1.setHours(2);
date1.setMinutes(49);
date1.setSeconds(33);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
