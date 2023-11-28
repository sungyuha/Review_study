import {useCallback, useEffect, useState} from 'react';
import ManyRendering from './ManyRendering';

// 리랜더링
// 리랜더링은 컴포넌트가 업데이트 될 때 발생
// state 변경
// props 변경

const App = () => {
    const [state, setState] = useState(0);

    const onClick = () => {}; // 함수나 값은 매번 App()이 다시 실행 될때마다 새로 생성

    const memoizationCallback = useCallback(() => { // useCallback은 리액트내에 어떤 메모리에 할당을 해놓음 -> 바뀌지 않음
        onClick(); // useCallback안에 onClick을 감싸고
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setState(1);
            console.log('update');
        }, 1000);
    }, []);

    return (
        <div>
            <ManyRendering onClick={memoizationCallback} /> {/* onClick 안에 memoizationCallback 전달 */}
        </div>
    );
}

export default App;
/**
 * 출처 : https://www.youtube.com/watch?v=HHKV9XbXUOw
 */