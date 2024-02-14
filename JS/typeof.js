// 출처 : https://www.youtube.com/watch?v=zoLTys_UlLY

// 자바스크립트 typeof 연산자 : 기본적으로 typeof 연산자는 바로 뒤에 표현식(expression)을 넘기면 자료형을 돌려줌
typeof 1; // 'number'
typeof "abc"; // 'string'
typeof true; // 'boolean'
typeof { a: 1, b: 2 }; // 'object'

// 변수나 함수를 상대로도 typeof 연산자를 사용가능
const num = 1;
typeof num; // 'number'

function add(x, y) {
    return x + y;
}
typeof add; // 'function'

// 주의점 : typeof 연산자는 결과 자료형을 클래스가 아닌 문자열로 돌려주기 때문에 이러한 버그가 발생하지 않도록 각별히 조심해야 함!!
