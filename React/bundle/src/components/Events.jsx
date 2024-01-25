// 이벤트 : 특정 사건을 의미, 예를들면 특정 사용자가 버튼을 클릭한 사건 -> 버튼 클릭 이벤트

import { useState } from 'react';

/** 
// DOM의 Event
<button onclick='activate()'>
    Activate
</button>
*/

// 리액트의 Event
<button onClick={Event}>
    event
</button>

// DOM과 리액트 Event의 차이점 -> 이름 표기법과 함수를 전달하는 방식이 다름

// Event Handler : 어떤 사건이 발생하면, 사건을 처리하는 역할

// 함수형 컴포넌트에서 Event처리
function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    /*
    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }*/

    // 방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? '켜짐' : '꺼짐'}
        </button>
    );
}

export default Toggle;