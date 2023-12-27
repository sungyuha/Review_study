function networkRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

async function getUser() {
    await networkRequest();
    return '코딩';
}

async function getTodo() {
    await networkRequest();
    return ['청소하기', '밥먹기'];
}

// getUser() 와 getTodo() 함수 호출
async function getData() {
    const user = await getUser();
    const todo = await getTodo();
    console.log(`${user}님 ${todo}를 하세요`);
}

getData();