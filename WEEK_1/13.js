// 조건부 실행
let x = 10;

// if ( x > 0) {
//   console.log();
// }

( x > 0 ) && console.log("x는 양수입니다.");
// 최신버전 스타일

// or 조건 (||)
//  삼항 연산자와 단축평가
let y;  //y는 undefined
let z = y || 20; //y가 언디파인드면 기본값을 20으로 설정해줘 

console.log(z);
