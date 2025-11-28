// 1. for문
// for (초기식; 조건식; 증감식) {
//     console.log("반복!");
// }
for (let idx = 0; idx < 10; idx++) {
  console.log(idx);
  //   if (idx % 2 === 0) { 이 조건식이 참이되면 continue문이 실행. 이 반복문 내의 다른 코드가 실행되지 않음.
  //     continue           -> 해당코드로 예를 들면, 짝수는 출력이 안됨
  //   }

  //   if(idx >= 5) { 조건식이 완료가 되지 않더라도 중간에 멈추고싶으면 이렇게 사용
  //     break;
  //   }
}

// 1부터 100까지 출력하는 코드
for (let idx1 = 0; idx1 < 101; idx1++) {
  console.log(idx1);

  if (idx1 >= 100) {
    break;
  }
}
