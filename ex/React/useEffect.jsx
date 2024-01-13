// 출처 : https://www.youtube.com/watch?v=kyodvzc5GHU

import React, {useEffect, useState} from 'react';

function App() {
    /*const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => { // 인자로는 e: 이벤트
        setName(e.target.value);
    }*/

    /*
    // 렌더링마다 매번 실행 됨 - 렌더링 이후
    useEffect(() => {
        console.log('렌더링 🎨');
    });

    // 마운트 + [item] 변경될때마다 실행
    // 마운팅 + count가 변경될때마다 실행
    useEffect(() => {
        console.log('count 변화 🎨');
    }, [count]);

    // 마운팅 + name이 변경될때마다 실행
    useEffect(() => {
        console.log('name이 변화 🎈');
    }, [name]);
    */

    useEffect(() => {
        // 마운팅 될때만 실행 됨
        console.log('마운팅 🎵')
    }, []);

    return (
        <div>
            {/* <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <input type='text' value={name} onChange={handleInputChange} />
            <span>name: {name}</span> */}
            
        </div>
    );
}

export default App;