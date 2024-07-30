// // const arr = [30, 1, 2, 5, 40];

// // // TODO: 100을 넣기(끝에)
// // // TODO: 넣은 100을 빼내서(pop) 변수에 할당하기
// // // TODO: 할당한 100을 console.log에 찍어보기

// // arr.push(100);

// // console.log(arr)

// // arr.pop();

// // console.log(arr)

// let fruits = ["사과", "바나나"];

// // for문을 이용해서 fruits의 모든 값을 console.log하는 방법
// for (let i = 0, i< fruits.length, i++) {
//     console.log(fruits[i])
// }

// fruits.forEach(function(아무이름){}
// )프루츠의ㅡ갯수만큼 한수 실행


// const testArr = ["윤창식", "최원장", "박가현", "김병연"];
// for(let i = 0; i < testArr.length; i++)
// testArr.forEach(function () {
//     console.log(testArr);  

// });

// (1) forEach는 배열의 메서드다.
// (2) 이 배열 메서드는 input(매개변수)을 갖는다.
// (3) 그 매개변수는 함수다(매개변수로 들어오는 함수를 = 콜백함수)
// (4) 그 매개변수로 들어온 함수는 input(매개변수)을 갖는다.
// (5) 그 매개변수에는 호출의 주체가 된 배열의 각 요소가 차례대로 할당된다.

// const testArr = [
//   {
//     name: "홍길동",
//     age: 21,
//   },
//   {
//     name: "홍길순",
//     age: 23,
//   },
//   {
//     name: "김르탄",
//     age: 40,
//   },
// ];


// testArr.forEach(function (Obj){
// if(Obj.age>=30){}

//   console.log(i.name);
// })


const testArr = ["윤창식", "최원장", "김병연", "박가현"];

const newArr = testArr.map();


[
  {
    name: "윤창식",
    job: "tutor",
  },
  {
    name: "최원장",
    job: "tutor",
  },
  {
    name: "김병연",
    job: "tutor",
  },
  {
    name: "박가현",
    job: "tutor",
  },
];


const tutors = [
  {
    name: "윤창식",
    job: "tutor",
  },
  {
    name: "최원장",
    job: "developer",
  },
  {
    name: "김병연",
    job: "tutor",
  },
  {
    name: "박가현",
    job: "tutor",
  },
];

const realTutors = tutors.filter();