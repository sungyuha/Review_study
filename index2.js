// 1. 로그인
function login(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username) {
                resolve(username);
            } else {
                reject(new Error('아이디를 입력해주세요'));
            }
        }, 1000);
    });
}

/* // 사용
login('코딩').then((username) => {
    console.log(`${username}님 안녕하세요`);
}) 
.catch((error) => {
    
})*/


// 2. 장바구니에 넣기
function addToCart(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(product) {
                resolve(product);
            } else {
                reject(new Error('장바구니에 담긴 상품이 없습니다'));
            }
        }, 1000);
    });
}

/* // 사용
login('감자').then((product) => {
    console.log(`${product}를 장바구니에 넣었습니다`);
}); */

// 3. 결제하기
function makePayment(cardNum, product, callback) {
    setTimeout(() => {
        callback(cardNum, product);
    }, 1000);
}
