// // // 문 ( if ,else if ,switch ~)

// // // 조건문 - if ,else if ,else ,switch
// // // 1. if 문

// // // <공식>
// // // if (조건/ T 또는 F가 나올 수 있는 조건) {}


// // // let x = 10;

// // // if (x > 0) {
// // // console.log("x는 양수입니다.");
// // // }

// // // // 1-2
// // let y = "hello world";

// // // y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력

// // if (y.length>=5) {
// //   console.log(y.length);
// // }

// // // if else 문

// // if () {
// // // T 인 경우 메인로직 1 수행
// // } else {
// // // F 인 경우 메인로직 2 수행
// // }

// // let x = -3;
// // if (x > 0) {
// // console.log("x는 양수입니다.");
// // }else {
// // console.log("x는 음수입니다.");
// // }

// if (조건1) {
// // 메인로직 1
// }else if(조건2) {
// // 메인로직 2
// }else {

// }
// // 조건 1 해당 안되면 조건 2
// // 조건 2도 해당 안되면 조건3

//1-4 switch
// 변수의 값에 따라, 여러 개의 경우 (case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
case "사과":
  console.log('사과입니다.');
  break;
  case "바나나":
  console.log('바나나입니다.');
  break;
  case "포도":
  console.log('포도입니다.');
  break;
  default :
  console.log('사과입니다.');
  break;
}