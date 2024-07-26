// // // // 연산자 {+ - * / %}

// // // // 더하기 연산자 - 우선순위 문자열
// // // console.log(1+1);
// // // console.log(1+"1");


// // // // 빼기 연산자
// // // //  우선순위가 숫자,
// // // console.log(1-"2");
// // // console.log(1- 2);

// // // // 곱하기 연산자
// // // // (암시적 형변환)더하기 빼고는 문자열보다 숫자가 우선
// // // console.log(2 * 3);
// // // console.log("2"*3);
// // // // 나누기 연산자
// // // // (암시적 형변환)
// // // console.log(4/2);
// // // console.log("4"/2);

// // // // 나누기 연산자 / vs 나머지 연산자 %
// // // console.log(5/2);
// // // console.log(5%2);

// // // // 할당연산자 (assigment)
// // // // 등호연산자 (=)
// // let x = 10;
// // console.log(x);
// // // // 더하기 등호 연산자
// // // x+5;
// // // console.log(x);

// // x+=5;
// // console.log(x);

// // // 빼기 연산자
// // x-=5;
// // console.log(x);
// // // x=x-5;

// // // x를 -10으로
// // x-=20;
// // console.log(x);

// // 곱하기 등호연산자

// let a =10;
// a *= 2;
// console.log(a); 

// // 비교연산자 (true 또는 false를 반환하는 연산자)
// // 일치 연산자(===)
// // 타입까지 일치해야 true를 반환하는 연산자

// // 숫자 2랑 숫자 2가 같니?
// console.log(2 === 2); 
// console.log("2"===2);
// console.log(2==="2");  

// // 불일치 연산자(!==)
// // 타입까지 일치해야 false를 반환하는 연산자

// // 숫자 2가 숫자 2와 다르니? 아니!(false) 같아
// console.log(2 !== 2);
// console.log("2"!== 2); 
// console.log(2 !== "2");  

// // 작다 연산자 (<)
// console.log("------")

// console.log(2<3); //true 
// console.log(2 <=3);  // 작거나 같다 true 
// console.log(3<=3); // 작거나 같다 true
// console.log(4<=3); //false

// // 논리 연산자
// // 논리곱 연산자 : 모두 t 일때 t 변환
// console.log(true && true); //true 둘 다 트루여야
// console.log(true && false);//false
// console.log(false && true); //f 둘다 f
// console.log(false && false); //t

// // 논리합 연산자 두 값 중 하나라도 t 인경우 t
// console.log(true||true);
// console.log(true||false);
// console.log(false||true);
// console.log(false||false);

// // 논리부정연산자
// console.log("--------");
// console.log(!true);
// let a = true;
// console.log(!a);

// // 삼항연산자 *** 중요
// // 조건에 따라 값을 선택한다.
// x = 10
// let result = (x < 5) ? "크다" : "같다";
// console.log(result);

// console.log("---------");
// // 3항연산자를 이용해서 y가 10보다 작은 경우 작다
// console.log();로 출력해주세요
// 10 보다 크다면 크다를 
let y = 20;
let result1 = (y < 10) ? "작다" : "크다";
// true 이면  : 전자로 결정 F 이면 후자로 결정 
console.log(result1);

// 타입연산자
console.log(typeof "5");