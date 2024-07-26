// // 함수
// // input, output
// function add (매개변수) {}
// // 함수 내부에서 실행할 로직

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add (x, y) {
  // let result;
  return x + y;
}

// f 키워드 / add 함수 이름 / () 매개변수 들어오는 자리 / 중괄호에 메인로직

// 함수 표현식 (let add 에서 함수 이름 썼기 때문에 f 뒤에 이름 붙일 필요 없음)
let add2 = function (x, y) {
  return x+y;
};

let functionResult2 = add2(10,20);
console.log(10,20);
// // 함수를 호출한다 (= 사용한다)
// // 함수명()-> add(입력값)
// // 적절한 인풋을 넣어야 아웃풋 나옴

// console.log(add(2, 3));

// let functionResult = add(3, 4);
// console.log(functionResult);

// let add3 = function (x, y) {
//   return x +  y;
// }
// console.log(add3(10, 20));

// let functionResult = add(3,4);
// console.log(functionResult);

// // 함수의 인풋 - 매개변수 (매개체가 되는 변수)
// 아웃풋 - 리턴문 뒤에 오는 값 : 반환값