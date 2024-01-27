import React from 'react';

function MyButton(props) {
    const handleDelte = (id, e) => {
        console.log(id, e.target);
    };

    // Arguments 전달하기 : 함수에 주장할 내용 -> 함수에 전달할 데이터 -> Event Handler에 전달할 데이터
    // Parameter : 매개변수 
    return (
        <button onClick={(e) => handleDelte(1, e)}>
            삭제하기
        </button>
    );
}

export default MyButton;