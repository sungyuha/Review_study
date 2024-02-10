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