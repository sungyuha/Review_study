// 온라인 쇼핑몰 시나리오

// 모두 네트워크 통신을 해야함! -> 현재는 setTimeout으로
// 1. 로그인
function login(username, callback) {
    setTimeout(() => {
        callback(username);
    }, 1000);
}

// 2. 장바구니에 넣기
function addToCart(product, callback) {
    setTimeout(() => {
        callback(product);
    }, 1000);
}

// 3. 결제하기
function makePayment(cardNum, product, callback) {
    setTimeout(() => {
        callback(cardNum, product);
    }, 1000);
}

// 콜백지옥
login('코딩', (username) => { // username을 매개변수로 전달 받음
    console.log(`${username}님 안녕하세요`);
    addToCart('감자', (product) => {
        console.log(`${product}을 장바구니에 담았습니다`);
        makePayment('0000000000000000', product, (cardNum, item) => {
            console.log(`${cardNum.slice(0, 6)}로 ${product}를 구매했습니다`); // slice를 사용하여 6자리만 호출
        });
    });
});

// 프로미스를 사용하면 콜백지옥에서 벗어날 수 있음
// Promise : 자바스크립트 비동기 처리에 사용되는 객체, 비동기 요청을 보내면 성공 또는 실패가 다양한 형태로 발생
login('코딩')
    .then((result) => addToCart('감자'))
    .then((product) => makePayment('0000000000000000', product))
