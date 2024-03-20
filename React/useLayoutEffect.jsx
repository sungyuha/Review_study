// useLayoutEffect : 첫 번째 인자로 콜백함수를 전달 받음, 두 번째 인자로 의존성 배열을 전달 받음 -> effect 실행 => 화면 업데이트

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const getNumbers = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // 데이터를 가져오는 API라고 가정
}

export default function App() {
    const [numbers, setNumbers] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        const nums = getNumbers();
        setNumbers(nums);
    }, []);

    // 스크롤이 제일 하단까지
    useLayoutEffect(() => {
        if (numbers.length === 0) {
            return;
        }
        for (let i = 0; 1 < 20000000; i++) {}
        ref.current.scrollTop = ref.current.scrollHeight;
    }, [numbers]);

    return (
        <>
            <button onClick={() => setNumbers([])}>Reset</button>
            <div
                ref={ref}
                style={{
                    height: '100px',
                    border: '1px solid blue',
                    overflow: 'scroll',
                }}
            >
                {numbers.map((number, idx) => {
                    <p key={idx}>{number}</p>
                })}
            </div>
        </>
    );
}