// useId() : react 버젼에 출시 된 react hooks -> 고유한 아이디를 만들기 위해 사용

import { useEffect, useId, useRef } from 'react';

const App = () => {
    return (
        <div>
            <MyInput />
        </div>
    );
}

const MyInput = () => {
    const id = useId(); // 장점 : 안정성
    const ref = useRef();
    // console.log(id); // 접근성에 유용하게 사용

    useEffect(() => {
        const element = ref.current;
        console.log(element);
    }, []);

    return (
        <div>
            <label htmlFor={`${id}-name`}>이름</label> {/** input마다 고유한 아이디 */}
            {/* <input id={`${id}-name`} /> */}
            <input id={id} ref={ref} />
            <button id='btn'>버튼</button>
        </div>
    );
}

export default App;