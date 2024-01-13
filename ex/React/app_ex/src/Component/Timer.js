import React, { useEffect } from 'react';

const Timer = (props) => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중...');
        }, 1000);

        // 타이머 컴포넌트가 언마운트 될때 함수 실행!
        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        };
    }, []);

    return (
        <div>
            <span>타이머를 시작, 콘솔을 보세요!</span>
        </div>
    );
}

export default Timer;