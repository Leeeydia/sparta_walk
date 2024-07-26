// // 객체
// // key- balue pair
// // 하나의 변수에 여러개의 값을 넣을 수 있다
// let person = {
//   name: "홍길동",
//   Age :  30,
// gender: "남자",
// }

// // 1-2 생성자 함수를 이용한 객체 생성 방법
// function person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// let person1 = new person("홍길동", 30 ,"남자");

// // 접근하는 방법
// console.log("1", person.name);
// console.log("2", person.age);
// console.log("3", person.gender);

// 객체 메소드 (객체가 가진 여러가지 기능 : object~~)
// 3-1 object. key() : key를 가져오는 메소드

let person = {
  name: "홍길동",
  Age :  30,
gender: "남자",
};

let keys = Object.keys(person);
console.log ("keys=> ", keys);

// 3-2 values
let values = Object.values(person)
console.log();

// eneries
// 키와 밸류를 묶어서 배열로 만든 배열 (2차원 배열)

let eneries = Object.entries(person)
console.log("entries=>", eneries);

// assign
// 복사
let newPerson = {};
Object.assign(newPerson, person{age : 31});
// 중괄호를 이용해서 일부 값만 바꿀 수도 있다
console.log("newPerson=>",newPerson);

// 객체 비교
// 크기가 커서 별도의 공간에 저장
//person1 / person2 각각 별도 공간에 대한 주소가 다르기 때문에 false
let person2 = {
  name: "홍길동",
  Age :  30,
gender: "남자",
};
console.log("answer =>", person1===person2);

// 객체 병합 ( ... )
let perfectman = {
...person1, ...person2
};