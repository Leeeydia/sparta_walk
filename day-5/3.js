// TODO: 함수 만들기
async function printTest() {
  // 1
  try {
    const result = await fetch(“https://jsonplaceholder.typicode.com/users”);
    const users = await result.json();
    console.log(users);
    // 해야 할 것 정리
    // 1) id가 root인 div를 찾아요.
    const rootDiv = document.getElementById(“root”);
    // 2) 위에 있는 users 데이터(10개 유저 데이터)를 가지고 1)에 찾은 div에 끼워넣을 html 코드를 만들어요.
    // TEST 코드를 한번 만들어봅시다.
    const 새로만든DIV = document.createElement(“div”);
    새로만든DIV.innerHTML = `
      <h2>${users[0].name}</h2>
      <p>사용자 이름: ${users[0].username}</p>
      <p>이메일: ${users[0].email}</p>
    `;
    const 새로만든DIV2 = document.createElement(“div”);
    새로만든DIV2.innerHTML = `
      <h2>${users[1].name}</h2>
      <p>사용자 이름: ${users[1].username}</p>
      <p>이메일: ${users[1].email}</p>
    `;
    // 3) 1)에서 찾은 div에 끼워넣어요.
    rootDiv.appendChild(새로만든DIV);
    rootDiv.appendChild(새로만든DIV2);
  } catch (error) {
    console.log(error);
  }
  // 6
}
// TODO: 함수 호출하기
printTest();