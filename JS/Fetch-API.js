/**
 * Fetch API : HTTP 파이프라인을 구성하는 요청과 응답 등의 요소를 JavaScript에서 접근하고 조작할 수 있는 인터페이스를 제공
    ㄴ  Fetch API가 제공하는 전역 fetch() 메서드로 네트워크의 리소스를 쉽게 비동기적으로 취득 가능
    ㄴ  프로미스 기반의 개선된 대체제. 또한 Fetch API는 CORS를 포함한 고급 개념을 HTTP 확장으로 정의
*/

// POST 메서드 구현 예제
async function postData(url = "", data = {}) {
    // 옵션 기본 값은 *로 강조
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE 등
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });
    return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
});

// JSON 데이터 업로드
async function postJSON(data) { // fetch()를 사용하면 JSON 인코딩된 데이터를 POST 요청에 포함할 수 있음
    try {
    const response = await fetch("https://example.com/profile", {
        method: "POST", // 또는 'PUT'
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("성공:", result);
    } catch (error) {
    console.error("실패:", error);
    }
}

const data = { username: "example" };
postJSON(data);

// 출처 : mdn