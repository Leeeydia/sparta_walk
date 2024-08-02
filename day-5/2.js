// TODO: 함수 만들기
async function printTest() {
  // fetch 함수로 API 불러오기 await 쓰려면 async 써야함
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  // fetch 기다려 // 
  const users = await result.json();
// json 도 promise 라 생각
  console.log(users);
}

// TODO: 함수 호출하기
printTest();



//함수만들기
async function printTest() {
  //fetch로 api 주소를 불러와
const result = await fetch("https://jsonplaceholder.typicode.com/users");

const users = await result.json();

//.json도 완성된 결과를 받으려면 기다려야 함
console.log(result);
console.log(users);




async function printTest() {
  // 함수를 호출할 때, await
  // fetch - 데이터를 요청 | .json과 같이 씀
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  // await - 기다리다 | fetch가 펜딩이 아닐 때까지 밑으로 내려가지 X | await 표현을 사용하고 싶다면 반드시 함수 앞에 async를 넣어줘야함
  const users = await result.json();
  // .json도 완성된 결과를 받으려면 기다려야 함. (비동기적으로 동작) | .json도 promise로 생각
  console.log(users);
  //
}


async function printTest() {
  // 함수를 호출할 때, await
  // fetch - 데이터를 요청 | .json과 같이 씀
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  // await - 기다리다 | fetch가 펜딩이 아닐 때까지 밑으로 내려가지 X | await 표현을 사용하고 싶다면 반드시 함수 앞에 async를 넣어줘야함
  const users = await result.json();
  // .json도 완성된 결과를 받으려면 기다려야 함. (비동기적으로 동작) | .json도 promise로 생각
  console.log(users);
  //
}

async function printTest() {
  // awwait를 사용하기 위해서는 await를 담는 함수가 async 여야한다.
  //const result = fetch("https://jsonplaceholder.typicode.com/users");
  //console.log(result); // 결과값 : Promise {<pending>} // fetch가 비동기 함수이기때문에 console.log보다 늦게 처리가 되어 pending상태로 출력이 됨.

  const result1 = await fetch("https://jsonplaceholder.typicode.com/users"); // awaite를 사용해 강제적으로 딜레이를 주어 충분히 데이터를 불러올 수 있도록 함

  const users = result1.json(); // .json도 비동기적으로 동작 따라서
  console.log(users); // 결과값 : Promise {<pending>}

  const users = await result1.json(); // 따라서 await 사용
  console.log(users); // 결과값 : (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
}