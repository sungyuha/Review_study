// 출처 : https://www.youtube.com/watch?v=0yR_Im3VPqQ

/**
 * Promise Static 함수들
 * Promise.all() : 여러개의 Promise들을 동시에 처리할 수 있음
 * Promise.allSettled() : 전달 된 Promise들이 성공이던, 실패하던 완료 될 때까지 기다림 / 각각의 promise가 성공&실패했는지 세세하게 알려줌
 */


function getName() {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            resolve('민철');
            // reject(new Error('에러: 이름이 없습니다'));
        }, 1000);
    });
}

function getTodo() {
    return new promise((resolve, reject) => {
        setTimeout(() => {
            resolve('음악감상');
            // reject(new Error('에러: 할일이 없습니다'));
        }, 2000);
    });
}

/*
// 로직 호출
// 순차적 Promise의 문제점 : 한 번에 하나씩 실행됨
getName()
    .then((name) => {
        console.log(name);
        return getTodo()
    })
    .then((todo) => {
        console.log(todo);
    });*/

    /*
// Promise.all() : 인자로 배열을 전달 받음 -> 그 배열 안에는 여러개의 Promise들을 넣어줄 수 있음 / 반환 된 값이 하나라로 실패하면 바로 reject시켜버림
const promise = Promise.all([getName(), getTodo()]);
Promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });*/

/*
// Promise.allSettled() : Promise를 배열 형태로 전달 받음 / 전달 된 Promise들이 성공이던, 실패하던 완료 될 때까지 기다림 / 각각의 promise가 성공&실패했는지 세세하게 알려줌
const promise = Promise.allSettled([getName(), getTodo()]);
promise
    .then((data) => {
        console.log(data);
    });*/

// Promise.any() : 새로운 Promise를 리턴 / 인자로는 동일하게 Promise 베열 형태로 전달 받음 
// Promise.any가 반환 하는 프로미스는 전달해준 프로미스들 중에 가장 먼저 resolve가 된 것에 값을 가지게 됨
const promise = Promise.any([getName(), getTodo()]);
promise
    .then((data) => {
        console.log(data);
    });