import { useState } from 'react';

function State() {
    const [names, setNames] = useState(['']);
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