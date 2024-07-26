// 일급객체로써의 함수
// 객체 - > key : value

const person = {
  name : "John",
  age : 30
  isMarried : true,
  sayHello : function ( ) { 
    // console.log ("hello, My name is" +  this.name)
    console.log (`Hello, My name is ${this.name}`);
  },
};
sayhello:() => {
  console.log (`Hello, My name is ${this.name}`) }
