// 출처 : https://www.youtube.com/watch?v=cEnAEQnANt8

// 배열 : 요소를 넣고 빼는거말고 다양한 함수를 제공

// find() : 배열에서 특정 조건을 만족하는 요소를 찾고 싶을 때 사용
const fruits = [
    {name: '🍊', price: 300},
    {name: '🍌', price: 700},
    {name: '🍎', price: 500},
    {name: '🍋', price: 1000},
];

// const item = fruits.find((fruit, idx) => { // find는 콜백함수를 전달 받음
const item = fruits.findIndex((fruit, idx) => { // findIndex도 콜백함수를 전달 받음
    // 조건 : 가격이 정확히 500인 과일
    if(fruit.price === 500 && idx === 2 ) {
        return true;
    }
    return false;
});

console.log(item);

// findIndex() : 요소의 index값을 반환, 조건을 만족하는 요소의 인덱스 값이라면 findIndex를 사용하면 됨