// 출처 : https://www.youtube.com/watch?v=mYHVOTxEwlY
// Promise : 비동기 처리에 사용되는 자바스크립트 객체 -> Promise는 비동기 작업이 맞이할 성공 혹은 실패를 나타냄
// 쉽게 이야기하면 프로미스는 하나의 상자로 볼 수 있음 -> 하나의 상자는 비동기 작업이 시작될 때 만들어짐 -> 상자는 처음에는 비어있다가 언젠가는 결과물로 채워지게 됨 (비동기 작업이 완료될 때 결과무로 채워짐)

/**
 * Promise의 3가지 상태 
 * 1) Pending 대기
 * 2) Fulfilled 성공
 * 3) Rejected 실패
 */

new promise = new Promise((res, rej) => { // 비동기 작업 성공 시 -> res 호출 / 비동기 작업 실패 시 -> rej 호출
    console.log('비동기 작업');
});