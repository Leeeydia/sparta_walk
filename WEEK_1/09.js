// 지역변수

function printX(){
  console.log(x)
}
// ㄴ지역변수 (함수 내부에서만 의미가 있음) -> 스코프의 한계가 있다
console.log(x);
printX();
// ㄴ 오류 