// 출처 : https://www.youtube.com/watch?v=mYHVOTxEwlY
// Promise : 비동기 처리에 사용되는 자바스크립트 객체 -> Promise는 비동기 작업이 맞이할 성공 혹은 실패를 나타냄
// 쉽게 이야기하면 프로미스는 하나의 상자로 볼 수 있음 -> 하나의 상자는 비동기 작업이 시작될 때 만들어짐 -> 상자는 처음에는 비어있다가 언젠가는 결과물로 채워지게 됨 (비동기 작업이 완료될 때 결과무로 채워짐)

/**
 * Promise의 3가지 상태 
 * 1) Pending 대기
 * 2) Fulfilled 성공
 * 3) Rejected 실패
 */

/* const promise = new Promise((resolve, reject) => { // 비동기 작업 성공 시 -> res 호출 / 비동기 작업 실패 시 -> rej 호출
    setTimeout(() => {
        const data = {name: '레이'};
        console.log('네트워크 요청 성공');
        resolve(data); // 비동기 작업 성공 시 만들어둔 객체가 호출
    }, 1000);
});

setTimeout(() => {
    console.log(promise);
}, 2000); */

/*
// 비동기 작업이 실패하는 경우
// 서버에서 데이터를 받아오지 못할 때
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = null
        if(data) {
            // 데이터를 성공적으로 받아올 때
            console.log('네트워크 요청 성공');
            resolve(data)
        } else {
            // 비동기 작업이 왜 실패했는지 알려주는 에러 객체
            reject(new Error('네트워크 문제!!!'))
        }
    }, 1000);
});

setTimeout(() => {
    console.log(promise);
}, 2000); */


// Promise를 사용하는 비동기 함수 만들기
/* function getData() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {name: '레이'};
            // const data = null;
            if(data) {
                // 데이터를 성공적으로 받아올 때
                console.log('네트워크 요청 성공');
                resolve(data)
            } else {
                // 비동기 작업이 왜 실패했는지 알려주는 에러 객체
                reject(new Error('네트워크 문제!!!'))
            }
        }, 1000);
    });
    
    return promise;
}


// Promise는 then(), catch(), finally() API제공
// const promise = getData(); // getData() 호출

// Promise 객체를 호출
/* setTimeout(() => {
    console.log(promise);
}, 2000); */

// Promise를 반환하는 비동기 함수 사용
/* getData().then((data) => { // then 이라는 메소드를 가지고 있는데 콜백함수를 전달 받음
    // 비동기 후처리 작업
    // console.log('완료!', data);
    const name = data.name;
    console.log(`${name}님 안녕하세요.`); // 후처리 코드
});
*/

// 비동기 처리 도중에 문제가 발생하여 Promise가 실패하는 경우

function getData() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // const data = {name: '레이'};
            const data = null;
            if(data) {
                // 데이터를 성공적으로 받아올 때
                console.log('네트워크 요청 성공');
                resolve(data)
            } else {
                // 비동기 작업이 왜 실패했는지 알려주는 에러 객체
                reject(new Error('네트워크 문제!!!'))
            }
        }, 1000);
    });
    
    return promise;
}

/* getData()
    .then((data) => {
        const name = data.name;
        console.log(`${name}님 환영합니다.`)
    })
    .catch((error) => { // 에러 처리는 catch(), catch도 콜백함수를 전달 받음
        // promise가 실패한 에러 처리
        console.log('error처리 했습니다.');
    }).finally(() => { // promise가 성공이든 실패든 무조건 실행되어야 할때 사용 -> 즉, promise의 성공여부와 상관없이 제일 마지막에 호출
        // 마무리 작업
        console.log('마무리 작업입니다.');
    }); */ 

// Promise Chaining
const promise = getData();
// promise.then().then().then() // 여러개의 비동기 작업을 순서대로 실행 가능
promise
    .then((data) => {getData()})
    .then((data) => {getData()})
    .then((data) => {getData()})
    .then((data) => {getData()})
    .then(console.log);

// - Web API 중 
// Fetch API : 특정 URL로 네트워크 요청을 보내는 비동기 함수, 특정 서버로부터 데이터를 받아오는 일을 할 때 많이 사용
// Fetch API는 Promise를 return 

// fetch().then().catch().finally() // 후처리를 다양하게 해줄 수 있음

fetch('https://jsonplaceholder.typicode.com/users') // 인자로 URL 집어넣어주면 됨
    .then((response) => {
        return response.json(); // response객체 데이터 추출
    })
    .then((data) => { // then에서 추출 된 데이터 받아옴
        console.log(data);
    })
    .catch((error) => {
        console.log('에러가 발생했습니다');
    })
    .finally(() => {
        console.log('마무리 작업');
    });