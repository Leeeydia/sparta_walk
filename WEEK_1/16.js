// // 배열

// // 1. 생성
// //1-1 기본생성
// let fruits = ["사과","바나나", "오렌지"];

// // 배열은 0번부터 시작한다 

// // 1-2 크기 지정
// let number = new Array(5);

// // console.log(fruits);
// // console.log(fruits.length);

// // 2. 요소 접근

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// // 배열 메소드
// // 3-1 push

// let fruits2 = ["사과", "바나나"]
// fruits2.push("오렌지") 

// // pop (삭제)
// fruits2.pop(); 
// // 마지막 요소 삭제 (바나나)

// shift
// 첫번째 요소 삭제
// let fruits = ["사과", "바나나"]
// fruits.shift();

// // unshift 
// // 맨 앞에 추가
// fruits.unshift("포도");

// // splice
// fruits.splice(1, 1, "포도" );
// 1번째부터 시작해서 1개 지우고 포도를 넣어줘

// slice
let fruits = ["사과", "바나나", "키위"]
let slicedFruits = fruits.slice(1, 2);
// 2번째요소부터 3번째요소까지 새로운 배열로 만들어줘
// 바나나부터 시작해서 키위 전까지 -> 바나나만 새로운 배열 요소
