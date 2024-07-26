// 문제 2번의 사자 객체를 가져옵니다.
const lion = {
  name: "심바",
  age: 3,
  protagonist: "true",
  content: "하쿠나마타타"
};

// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
  return lion.age + 1;
}

// 함수 실행 이후 사자의 현재 나이를 출력합니다.
console.log(incrementAge(lion))