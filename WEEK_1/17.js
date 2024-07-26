// forEach, map, filter, find
// let numbers = [ 4, 1, 5, 4, 5];

// 매개변수 자리에 함수를 넣어주는 것 -> 콜백 함수
// numbers.forEach(function(item){
//    console.log ("item입니다=>" + item);
// });

// // map - 항상 원본 배열의 길이만큼이 return 된다

// let newnumbers = numbers.map (function(item){

//   return item * 2;
// })

// console.log(newnumbers);


// // 필터 - 조건에 해당되는 것만 리턴 됨
// let filterNumbers = numbers.filter(function(){

//   return item === 5;
// });

// find

let numbers = [ 4, 1, 5, 4, 5];

let result = numbers.find(function(item){
  return item > 3
});

console.log(result);
