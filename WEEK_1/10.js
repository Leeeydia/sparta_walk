// 화살표 함수
// ES6 신 문법
function add (x,y){
  return x + y
}

// 기본적인 함수 표현식

// 간편하게 나온 신문법

// 1-1. 기본적인 화살표 함수
let arrowFun01 = (x, y) => {
  return x + y
}

// 처음에는 기본 문법을 사용하고 나중에 화살표함수 사용하기!

// 1-2 한줄로
let arrowFun02 = (x, y) => x + y
// 중괄호 삭제 // 중괄호 안에 줄이 한줄이면 가능/ 다른 로직 많으면 사용 불가 // 중괄호 생략이 불가하기 때문에

function testFunc(x) {
  return x;
}

// 화살표 함수로!
let arrowFun03 = x => x
// 매개변수 한개일 ㄴ 경우 ( ) 빼도 됨