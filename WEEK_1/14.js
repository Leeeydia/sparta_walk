// falsy 한 값, truthy 한 값

if (0) {
// 넘버타입도 True or False 로 설정 가능
console.log("hello");
}

if ("" ) {
  console.log("hello");
}

if (null ) {
  console.log("hello");
}

if ( undefined) {
  console.log("hello");
}

if ( NaN) {
  console.log("hello");
}

if (false ) {
  console.log("hello");
}

if (true) {
  console.log("hello");
}


// 마지막 true 한번만 실행 됨 
// if 문의 조건문 안에서는 falsy 한 값으로 해석된다