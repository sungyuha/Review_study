// 출처 : https://www.youtube.com/watch?v=j6VkGimAs-E

// this는 함수를 호출한 객체이다

// 전역 문맥
console.log(this); // window가 호출

if(true) {
    // 전역적인 문맥에서 접근을 하면 this는 window가 호출
    console.log(this);
}

// 함수 문맥
function main() {
    // 함수 내부에 있는 this
    console.log(this);
}

main(); // window.main(); 과 같음

// 예외상황! -> 'use strict'로 엄격모드를 활성화하면 this값이 undefined