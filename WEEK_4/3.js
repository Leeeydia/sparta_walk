// // (1) 원본배열 영향 있음
// // (2) sort도 callback 함수를 가진다
// // (3) 이 callback함수는 인자(input)가 2개
// // (4) 이 callback함수의 return에 필요한 것은 '숫자'
// // (5) 숫자로 이루어진 배열을 정렬할 때는 b-a 가능
// // (6) 문자로 이루어진 배열을 정렬할 때는 localCompare 필요


// function sortArray(arr) {
//   const arry1 = sort.sortArray(b - a ){
//     console.log(sortArray)
//   }
// }
// function sortArray2(arr) { sort.sortArray2(
//   localCompare.sortArray2()
// ){

// }
//   // 여기에 sort를 사용하여 작성하세요
// }

// // 예시 출력
// console.log(sortArray([3, 1, 4, 1, 5, 9])); // 출력: [1, 1, 3, 4, 5, 9]
// console.log(sortArray2(["바나나", "사과", "포도"])); // 출력: ['바나나', '사과', '포도']


// 다시풀기 ******

function sortArray(arr) {
  // 여기에 sort를 사용하여 작성하세요
  const result = arr.sort(function (인자1, 인자2) {
    return 인자2 - 인자1;
  });
  return result;
}
function sortArray2(arr) {
  // 여기에 sort를 사용하여 작성하세요
  const result = arr.sort(function (인자1, 인자2) {
    return 인자1.localeCompare(인자2);
  });
  return result;
}

// 예시 출력
console.log(sortArray([3, 1, 4, 1, 5, 9])); // 출력: [1, 1, 3, 4, 5, 9]
console.log(sortArray2(["바나나", "사과", "포도"])); // 출력: ['바나나', '사과', '포도']