// 출처 : https://www.youtube.com/watch?v=kyodvzc5GHU

import React, {useEffect, useState} from 'react';

function App() {
    const [count, setCount] = useState(1);

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    // 렌더링 될때마다 매번 실행 됨
    useEffect(() => {
        console.log('렌더링 🎨');
    });

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
        </div>
    );
}

export default App;