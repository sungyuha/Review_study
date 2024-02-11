// Inheritance(상속) : 객체들 간의 관계를 구축하는 방법. 슈퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속 받을 수 있음

// 클래스 : 클래스는 객체지향 프로그래맹에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀

// Inheritance
class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdoMedel extends IdolModel {
    dance() {
        return `${this.name}이 춤을 춥니다.`
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.year);

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);