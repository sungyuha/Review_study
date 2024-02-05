// 출처 : https://www.inflearn.com/course/%EC%BD%94%EB%93%9C%ED%8C%A9%ED%86%A0%EB%A6%AC-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%92%80%EC%BD%94%EC%8A%A4/dashboard

/**
 * try...catch
 * 1) 발생시킬때 -> 에러를 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 -> 에러를 잡는다고 한다. (catch)
 */

function runner() {
    try {
        console.log('Hello');

        // throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally { // 무조건 실행 코드
        console.log('---finally---');
    }
}
runner();