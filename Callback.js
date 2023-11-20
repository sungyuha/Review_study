// 출처 : https://www.youtube.com/watch?v=D7k6ld19v9M
// 자바스크립트 비동기 프로그래밍
// 비동기 콜백

Callback() // 콜백함수 -> 다른 함수의 인자로 전달되는 함수

// ex1) 
function main(Callback) {
    Callback(); // 함수 내부에서 필요할 때 호출
}

main(function() {  }); // function() {  } -> 다른 함수의 인자로 전달되는 함수가 콜백함수!

// 비동기 상황에서 처리되는 콜백함수를 비동기 콜백

// ex2)
// 서버에서 데이터를 받아오는 비동기적 함수

function getData(callback) { // 매개변수로 callback() 를 전달 받게 함
    setTimeout(() => { // setTimeout도 비동개 콜백을 사용하는 함수
        console.log('서버에 데이터를 받아왔어요'); // 네트워크 통신
        callback()
    }, 2000); // 2초후
}

getData(() => {
    console.log('후처리.!!'); // 서버에서 데이터를 받아오면 getData()의 인자로 콜백함수 안에 전달
});
