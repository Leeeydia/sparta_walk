async function printTest() {
  // 함수를 호출할 때, await // fetch는 외부로부터 데이터를 가져오는 것

  //  .json 도 완성된 결과를 받으려면 기다려야한다 !! (비동기적으로 동작한다 !!)
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    // fetch 는 promise 반환 console log 먼저 실행 됨
    // 나중에 실행하고 싶으면 ? fetch 앞에 await
    // 저 링크는 정상적인 데이터를 줄 수도 있고 없을 수도 있다 = 제어권이 나에게 없다
    // ㄴ try 시도
    const users = result.json();
    console.log(users);
  } catch (error) {
    console.log(error);
    // 주소를 잘못 넣은 경우 콘솔에서 알려줌 / 주소 올바르면 에러까지 오지 않음
    // try 블록에 문제가 발생하면 잡아라 (try ~ catch 블럭)
  }
}

// result =  promise 객체 / 데이터 담는 법

printTest();

// 비동기 로직 작성
// promise - 요청중/성공/실패 (panding fullfied rejecred)

// 1. then, catch
// 2.async / await -> 이 것만 공부
// await 키워드 공간을 가지고 있는 함수는 반드시 async 사용 필요

// div를 이용해서 html 만드는거 특강 예정
