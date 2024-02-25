import React, { useRef } from 'react';

export default function scrollToTop() {
    const topRef = useRef(null);

    // 버튼 클릭 이벤트
    const scrollToTop = () => {
        if(topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' }); // topRef를 선택해서 감
        }
    };

    return (
        <div>
            <div
                ref={topRef}
                style={{ height: '50vh', backgroundColor: 'lightblue'}}
            >
                페이지 상단!!
            </div>
            <div style={{ height: '150vh', backgroundColor: 'lightcoral'}}>
                스크롤해서 버튼을 눌러보세요.
            </div>
            <button onClick={scrollToTop}>상단으로 스크롤!</button>
        </div>
    );
}
