function networkRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

async function getUser() {
    // 에러처리
    throw new Error('에러가 발생했어요!');
    await networkRequest();
    return '코딩';
}

async function getTodo() {
    await networkRequest();
    return ['청소하기', '밥먹기'];
}

// getUser() 와 getTodo() 함수 호출
async function getData() {
    // const user = await getUser();

    // try catch로 에러처리
    let user
    try {
        user = await getUser();
    } catch(error) {
        // 에러가 잡히면
        console.log(error.message);
        user = '익명';
    }

    const todo = await getTodo();
    console.log(`${user}님 ${todo}를 하세요`);
}

getData();