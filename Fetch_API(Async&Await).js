// Fetch API
// 특정 서버로부터 데이터를 받아오는 로직 시나리오

async function fetchData() {
    // fetch함수는 Promise를 리턴
    // await : 서버로부터 데이터를 받아올때까지 기다려줌
    // fetch는 response라는 결과를 받아옴
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // 샘플 데이터 JSON
    // response 추출
    const data = await response.json() // json 메소드로 Promise를 반환
    console.log(data);
}

fetchData();
