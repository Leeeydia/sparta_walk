// for, while ->  ~ 동안 : 반복문

// for (초기값; 조건식; 증감식) {

// }

// 배열과  for문은 짝꿍

// ex : 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시

for (let i = 0; i < 11; i++) {
  if (i >= 2) {
    if (i % 2 === 0) {
      console.log(i + "는 2의배수입니다");
    }
  }
}

// for ~in문
// 객체의 속성을 출력하는 문법


//  whhile
// let i = 0;

// while문을 활용해서 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예

// while (i = 3 < i < 100) {
//   console.log(i)
//   i++;
// }

// 오답- 초기값을 설정했어야

// while 문 정답
let i = 3;
while (i<100){
  if(i % 5 ===0 && i >= 5 ){
    console.log(i + "는 5의 배수입니다.")
  }
  i++;
}

// do ~ while문

// break - 그 자리에서 끝냄 // continue - 다음 순서로 넘어감