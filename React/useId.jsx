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
    const id = useId(); // 장점 : 쌍점, SSR에서 안정성 // SSR(서버사이드 렌더링)이란 페이지를 서버에서 렌더링 한 후 클라이언트로 전달하는 방식 -> 클라이언트에서는 하이드레이션 과정을 통해서 상호작용이 가능한 페이지로 렌더링 함
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