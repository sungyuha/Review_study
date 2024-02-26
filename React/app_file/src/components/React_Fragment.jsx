// 컴포넌트가 리턴하는 앨리먼트들은 반드시 단 하나의 최상위 태그로 묶여있어야한다
// React.Fragment

import React from 'react';

// map() 사용시 Fragment에 key를 전달할 때

const Column = (props) => {
    const todoList = ['밥먹기', '코딩하기', '커피 마시기'];
    return (
        <>
            {todoList.map((todo) => (
                <React.Fragment key={idx}>
                    <td>{todo}</td>
                    <td>{todo}</td>
                </React.Fragment>
            ))}
        </>
    );
}

export default Column;