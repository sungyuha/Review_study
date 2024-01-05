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


// 객체의 메소드 -> 객체의 다른 속성을 접근할때 유용하게 사용
const object = { // 메소드는 객체의 속성으로 쏙 넣어진 함수를 의미!
    name: '코딩',
    // main이라는 함수를 object 객체의 메소드로
    main: function () {
        console.log(this);
    }, 
};

object.main(); 


// 함수를 DOM요소에 이벤트 처리기
const button = document.getElementById('btn');

button.addEventListener('click', function() {
    console.log(this); // this값은 이벤트를 발사한 요소로 설정 됨
});


/**
전통적인 함수 문법
 * 호출 방법에 따른 this 변화
 * this를 고정하기위해 bind() 사용
 */

/**
 * 화살표 함수 문법
 * 더 간결한 함수 선언 문법
 * this가 호출에 따라 바뀌지 않음
 * 화살표 함수의 this값은 함수를 감싸는 스코프에 this를 그대로 가져와서 사용, 즉this를 외부에서 가져옴
 * 화살표 함수의 this는 상위 스코프의 값을 가져오는 것
 */

/**
 * 요약!!
 * 화살표 함수는 선언 시점에 바인딩
 * 함수 선언문은 실행 시점에 바인딩
 */


// 화살표 함수의 this
const objected = {
    name: '코딩',
    main: function () {
        console.log(this);
    },
    mainArrow: () => {
        // window의 this값
        console.log(this); // 화살표 함수의 this는 상위 스코프의 값을 가져오는 것
    }
};

objected.mainArrow(); // objected