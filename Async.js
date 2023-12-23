// 출처 : https://www.youtube.com/watch?v=6-8mbuUC3fk
// Async : 비동기 함수를 정의할 때 사용하는 키워드

function networkRequest() { // 네트워크 2초가 걸리는 로직 시나리오 
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('데이터를 받아왔습니다');
            resolve();
        }, 2000);
    });
}

async function getData() {
    await networkRequest(); // await를 앞에 작성하면 데이터를 기다렸다가 networkRequest() 출력 후 리턴문 호출
    return '코딩';
}

const data = getData();
user.then((data) => console.log(data)); // Promise 객체가 콘솔에 출력

// async -> Promise 반환하는 비동기 함수로 변신한다!