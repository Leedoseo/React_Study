// 1. if문
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
} else if (num >= 5) {
  console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  console.log("해당 사항이 없습니다");
} // if문은 if로 시작해서 else로 끝나거나 if문 자체로 끝나야 함

// 2. switch문
// -> if문과 기능은 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적
let animal = "bear";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  default: {
    console.log("그런 동물은 없습니다");
  }
}
