// List : 같은 아이템을 순서대로 모아놓은 것, 리스트를 위해 사용 되는 자료구조가 Array(배열)
// Array(배열) : JS의 변수나 객체들을 하나의 변수로 묶어 놓은 것
//Key : 각 객체나 아이템을 구분할 수 있는 고유한 값

// 여러개의 Component 렌더링 하기
// map() : 두 메소드 다 배열의 모든 원소를 돌면서 해당 요소에 관한 작업을 실행하며, 새로운 배열을 반환
// 예제 코드
const doubled = numbers.map((number) => number * 2);

// React에서 map
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
    <li>{number}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);

// 최종 렌더링 코드
ReactDOM.render(
    <ul>
        <li>{1}</li>
        <li>{2}</li>
        <li>{3}</li>
        <li>{4}</li>
        <li>{5}</li>
    </ul>,
    document.getElementById('root')
);

// List의 Key : 아이템들을 구분하기 위한 고유한 문자열