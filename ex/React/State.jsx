import { useState } from 'react';

const heavyWork = () => {
    console.log('매우 무거운 작업!!!');
    return ['이민수', '강기영'];
};

function State() {
    const [names, setNames] = useState(() => {
        return heavyWork(); // 초기값을 가져올 때 무거운 작업을 해야 한다면 콜백형태로 값을 리턴해줌
    });
    const [input, setInput] = useState('');

    // onChange 해줄 함수
    const handleInputChange = (e) => {
        // input state 업데이트
        setInput(e.target.value);
    }

    // 버튼 클릭 이벤트 함수
    const handleUpload = () => {
        setNames((prevState) => { // prevState: 이전값의 state
            console.log('이전 state: ', prevState);
            return([input, ...prevState]);
        });
    }

    return (
        <div>
            <input type='text' value={input} onChange={handleInputChange} />
            <button onClick={handleUpload}>Upload</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>;
            })}
        </div>
    )
}

export default State;