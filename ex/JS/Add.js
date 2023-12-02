charCount('aaa');
/*{
    a: 4
}*/

charCount('hello');
/*{
    h: 1,
    e: 1,
    l: 2,
    o: 1
}*/

charCount('Your PIN number is 1234')
/*{
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
}*/

function charCount(str) {
    // 주석은 가장 간단하게 무언가를 한다고 추가하고
    //이어서 출력값이 문자열 내의 소문자 영숫자 문자인 키를 지닌 객체를 반환해줌
    
}

function charCount(str) {
    // 마지막에 반환할 객체에 이어 문자열에 
    // 루프를 적용하고 세부적인 부분을 작성한 
        // char(문자)가 숫자/문자이며 객체에 키라면 1을 개수에 더하도록 함
        // char(문자)가 숫자/문자이며 객체에 없다면 추가하고 값을 1로 설정함
        // 이어서 문자가 공백, 마침표 등과 같은 다른 것이라면 아무것도 하지 않도록 해줌
    // 다음에 마지막에 객체를 반환
}


function charCount(str) {
    // 마지막에 반환할 객체에 이어 문자열에 
    let result = {};
    // 루프를 적용하고 세부적인 부분을 작성함
    for(let i = 0; i <str.length; i++) {
        let char = str[i]
        // char(문자)가 숫자/문자이며 객체에 키라면 1을 개수에 더하도록 함
        if(result[char] > 0) {
            result[char]++;
        } else {
            // char(문자)가 숫자/문자이며 객체에 없다면 추가하고 값을 1로 설정함
            result[char] = 1;
        };
    }
        return result;
        // 이어서 문자가 공백, 마침표 등과 같은 다른 것이라면 아무것도 하지 않도록 해줌
    // 다음에 마지막에 객체를 반환
}