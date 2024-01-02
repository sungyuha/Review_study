function main() {
    console.log(this);
}

 // bind : 새로운 함수를 반환
const mainBind = main.bind({name: 'Hello'}); // 넣어준 {name: 'Hello'}값이 this로 설정 된 새로운 험수를 반환
mainBind();

// Bind의 주의점!! -> 이미 bind된 걸 또 bind가 될 수 없음