// 자바스크립트 배열의 원소 제거

// pop() : 메서드는 배열에서 마지막 원소를 제거한 후에, 제거된 원소를 결과로 반환

const fruits = ['apple', 'orange', 'coffee'];
fruits.pop(); // 'coffee'
console.log(fruits); // [ 'apple', 'orange' ]

// shift() : 반대로 배열의 첫 번째 원소를 제거하고 싶을때 사용
const drink = ['apple', 'orange', 'coffee'];
drink.shift(); // 'apple'
console.log(drink); // [ 'orange', 'coffee' ]

// pop()와 shift의 공통점 : 별도로 사본 배열 생성한 후 원소를 제거하는 것이 아니라, 원본 배열로 부터 바로 원소를 제거

// 출처 : https://www.youtube.com/watch?v=guPtkYuZ-3c