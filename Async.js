// 출처 : https://www.youtube.com/watch?v=6-8mbuUC3fk
// Async : 비동기 함수를 정의할 때 사용하는 키워드

function getData() {
    return '코딩';
}

const data = getData();
console.log(data); // 문자열 코딩 출력


async function getUser() { // 항상 Promise를 리턴하는 비동기 함수가 됨
    return '코딩';
}

const user = getUser();
console.log(user); // Promise 객체가 콘솔에 출력