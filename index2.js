// 온라인 쇼핑몰 시나리오 로직
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
function makePayment(cardNum, product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cardNum.length !== 16) {
                reject(new Error('잘못된 카드 번호 입니다.'));
                return;
            }

            if(!product) {
                reject(new Error('결제할 상품을 넣어주세요'));
                return;
            }
            resolve(product);
        }, 1000);
    });
}

/*makePayment('1234123412341234', '감자')
    .then((product) => {
        console.log(`${product}를 결제했습니다`);
    })
    .catch((error) => console.log(error));*/

// Promise Chaining으로 각각의 로직 호출
login('코딩')
    .then((username) => {
        console.log(`${username}님 환영합니다`);
        return addToCart('감자');
    })
    .then((product) => {
        console.log(`${product}를 장바구니에 넣었습니다`);
        return makePayment('1234123412341234', product);
    })
    .then((product) => {
        console.log(`${product} 결제를 완료했습니다`);
    })
    .catch((error) => {
        console.log(error.message);
    });
