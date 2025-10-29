// 1. 변수 -> 계속해서 값이 바뀔 수 있는 저장소, let & var가 존재
let age = 27; // 변수를 선언한다 or 변수를 초기화한다. let age; 도 가능
console.log(age);

// 2. 상수 -> 선언 이후 변경이 불가능한 저장소, 선언할 때 초기화 해야함
const birth = "1998.02.07"; // const birth; 이건 안됨 -> 이후에 값을 넣어줄 수 없기때문

// 3. 네이밍 규칙
// 3-1. $, _ 를 제외한 기호는 사용할 수 없음
let $_name;

// 3-2. 숫자로 시작할 수 없음
let name1;
let _2name;

// 3-3. 예약어를 사용할 수 없음
// let if name -> 안됨!

// 4. 변수 명명 가이드
// 안좋은 예시
let a = 1;
let b = 1;
let c = a - b;

// 좋은 예시
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount; // 누가봐도 바로 이해할 수 있는 변수명을 지어주는 것이 좋음.
