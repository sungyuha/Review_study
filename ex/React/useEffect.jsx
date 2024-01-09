// 출처 : https://www.youtube.com/watch?v=kyodvzc5GHU

import React, {useEffect, useState} from 'react';

function App() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => { // 인자로는 e: 이벤트
        setName(e.target.value);
    }

    // 마운트 + [item] 변경될때마다 실행
    useEffect(() => {
        console.log('count 변화 🎨');
    }, [count]);

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <input type='text' value={name} onChange={handleInputChange} />
            <span>name: {name}</span>
        </div>
    );
}

export default App;