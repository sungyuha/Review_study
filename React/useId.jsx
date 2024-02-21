// useId() : react 버젼에 출시 된 react hooks -> 고유한 아이디를 만들기 위해 사용

import { useId } from 'react';

const App = () => {
    return (
        <div>
            <MyInput />
        </div>
    );
}

const MyInput = () => {
    const id = useId();
    console.log(id); // 접근성에 유용하게 사용

    return (
        <div>
            <label htmlFor={`${id}-name`}>이름</label> {/** input마다 고유한 아이디 */}
            <input id={`${id}-name`} />
            <br />
            <label htmlFor={`${id}-age`}>나이</label>
            <input id={`${id}-age`} />
        </div>
    );
}

export default App;