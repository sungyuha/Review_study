// useRef : 1) 저장 공간으로서의 기능 -> 값을 유지시켜주는 변수, 라이플 사이클 주기동안 값을 유지시켜줌 -> useState처럼 UI를 업데이트 하지 않음, 2) DOM요소를 선택하는 기능

// 검색 기능
import React, { useState, useRef } from 'react';

const useRef = () => {
    const [inputValue, setInputValue] = useState('');
    const prevInputValueRef = useRef(''); // 전에 입력한 값을 저장만 하는 용도
    const fetchSearch = () => { 
        console.log('api호출 시작');
        // api호출 내용
    };

    const handleSearch = () => {
        if(prevInputValueRef.current !== inputValue && inputValue);
        fetchSearch();
        prevInputValueRef.current = inputValue; // 현재 입력 된 
    };

    return (
        <div>
            <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='검색어을 입력하세요'
            />
            <button onClick={handleSearch}>검색</button>
        </div>
    );
}

export default useRef;