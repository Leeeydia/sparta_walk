// 형 변환
//  형태 -> 바꾼다
//  명시적 형 변환, 암시적 형 변환

// 암시적 형 변환
// 1-1 문자열
let result1 = 1 + "2";
// console.log(result1);
// console.log(typeof result1);
// 숫자와 문자를 더하니까 12라는 문자열로 변환 됨 // 자동으로 (암시적으로 변환 됨)


let result2 = "1" + true;
// console.log(result2);
// console.log(typeof result2);
// 문자열과 다른 데이터타입이 + 로 만나면 문자열이 우선시 된다

// {}, null , undefined + "1"-> 문자열


//  1-2 숫자
let result3 =  1- "2";
// console.log(result3);
// console.log(typeof result3);

let result4 = "2" * "3";
// console.log(result4);
// console.log(typeof result4);
// + 연산자 제외하고 다른 연산자 - * / 숫자가 우선시 됨
// 문자와 문자가 와도 숫자가 우선시

// 2. 명시적 형 변환
// 2-1 Boolean
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(("-------------"));
// console.log(Boolean("false"));
// console.log(Boolean({}));
// 문자열은 들어있는 값이 아무리 false라도 영향을 받지 않음
// 빈문자열이 아니라 값이 있는 문자열은 무조건 true
// 객체는 값이 비어있어도 true

// 2-2 문자열
// let result5 = String(123);
// console.log(typeof result5);
// console.log(result5);

// let result6 = String(true);
// console.log(typeof result6);
// console.log(result6);

// let result7 = String(false);
// console.log(typeof result7);
// console.log(result7);

// let result8 = String(null);
// console.log(typeof result8);
// console.log(result8);

// let result9 = String(undefined);
// console.log(typeof result9);
// console.log(result9);

// 1-3 number
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);

// 문자열을 넣었음에도 숫자로 출력 됨