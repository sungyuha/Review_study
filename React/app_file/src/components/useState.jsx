// https://www.youtube.com/watch?v=G3qglTF-fFI

// state : 컴포넌트의 상태
// const [state, setState] = useState(초기값); -> 배열 형태로 반환 -> 화면이 업데이트 / setState는 함수

import { useState } from "react";

function AppState() {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime; // 변수
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = setTime(time + 1);
        }
        setTime(newTime);
    };

    console.log('업데이트!!!');

    return (
        <div>
            <span>현재 시각: {time}시</span>
            <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default AppState;