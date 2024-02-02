// Reduce() : 배열 함수 -> 배열 안에 있는 모든 요소들을 이용해서 하나의 값으로 만들때 사용

// forEach
/* let total = 0;
numbers.forEach(number => {
    total = total + number;
});

console.log(total); */

// reduce - 모든 요소 합 구하기

/*const numbers = [1, 2, 3, 4];

const total = numbers.reduce((accumulator, currentValue) => { // 인자로 전달해주는 함수를 리듀서 함수 / 리듀서 함수는 두 가지 매개변수를 전달 받음 / currentValue: 현재 처리중인 요소
    // 배열에 리듀서를 호출해주면, 리듀서 함수는 배열의 각 요소마다 한 번씩 실행 됨!!
    return accumulator + currentValue;
}, 0);*/

// reduce - 가장 작은 요소 구하기
const numbers = [10, 4, 2, 8];

const smallest = numbers.reduce((accumulator, currentValue) => {
    if (accumulator > currentValue) {
        return currentValue;
    }
    return accumulator;
}); // 초기값을 넣어주지 않으면 리듀서는 첫 번째 요소를 스킵하고, 두 번째 요소부터 실행 됨

console.log(smallest);