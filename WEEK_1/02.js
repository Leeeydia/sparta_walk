// 데이터 타입
// runtime :  run 하는 time
//  코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// 


// 1. 숫자(Number)
// 1-1 정수형 숫자(Integer)
let num1 = 10;
console.log(num1);
console.log(typeof num1);

// 1-2 실수형 숫자(Float)
let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // "number"

// 1-3 지수형 숫자 (Exponential)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3); // 250000
console.log(typeof num3); // "number"

// 1-4 NaN (Not a Number)
let num4 = "Hello" / 2;
console.log(num4); // NaN
console.log(typeof num4); // "number"

// 1-5 Infinity
let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // "number"

// 1-6 Infintiy
let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num6); // "number"