// 출처 : https://www.youtube.com/watch?v=cEnAEQnANt8

// 배열 : 요소를 넣고 빼는거말고 다양한 함수를 제공

/* 
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
    // if(fruit.price === 500 && idx === 2 ) {
        if(fruit.price === 500 ) { // 조건을 만족하는 요소가 없으면 -1을 반환
        return true;
    }
    return false;
}); */

console.log(item);

// findIndex() : 요소의 index값을 반환, 조건을 만족하는 요소의 인덱스 값이라면 findIndex를 사용하면 됨

// some() : 배열 안에서 특정 조건을 만족하는 요소가 하나라도 있는지 확인하고 싶을 때 사용
const fruitss = [
    {name: '🍊', price: 300},
    {name: '🍌', price: 700},
    {name: '🍎', price: 500},
    {name: '🍋', price: 1000},
];

fruitss.some((fruit) => {
    if( fruit.price === 600 ) {
        return true;
    } 
    return false;
});

console.log(doesExist);
/*
// every() : 배열 안에 있는 모든 요소들이 특정 조건을 만족하고 있는지 확인하고 싶을 때 사용

const fruits = [
    {name: '🍊', price: 300},
    {name: '🍌', price: 700},
    {name: '🍎', price: 500},
    {name: '🍋', price: 1000},
];

const isOver = fruits.every((fruits) => {
    if(fruits.price > 100) {
        return true;
    }
    return false;
});

console.log(isOver);
*/

// filter() : 배열에서 특정 조건을 만족하는 요소들만 빼내서 새로운 배열로 반환 -> 조건을 만족하는 것들로만 필터링 해줌
// 필터 함수는 원본 배열을 변경하지 않고 새로운 배열을 만들어서 반환

const itmes = [
    {toy: 0, price: 400},
    {toy: 1, price: 600},
    {toy: 2, price: 200},
    {toy: 3, price: 1100},
];

const isItem = itmes.filter((itme) => {
    if(itme.price <= 500) {
        return true;
    }
    return false;
});

console.log(isItem);

// map() : 배열의 모든 원소를 돌면서 해당 요소에 관한 작업을 실행하는데, 새로운 배열을 반환

const fruits = [
    {name: '🍊', price: 300},
    {name: '🍌', price: 700},
    {name: '🍎', price: 500},
    {name: '🍋', price: 1000},
];

const priceTaps = fruits.map((fruit) => {
    return `${fruit.name}: ${fruit.price}원`;
});

console.log(priceTaps);