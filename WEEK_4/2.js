const 회원명부 = [
  {
    이름: "홍길동",
    나이: 25,
    성별: "male",
  },
  {
    이름: "홍길순",
    나이: 30,
    성별: "female",
  },
  {
    이름: "홍길자",
    나이: 40,
    성별: "female",
  },
];

// 회원명부에서 여자인 첫 번째 회원을 찾아보세요.(find 이용)

const result = 회원명부.find(function (person) {
  if (person.성별 === "female") {
    return true;
  } else {
    return false;
  }
});
console.log(result);
