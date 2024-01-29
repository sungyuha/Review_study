import React from 'react';

const style = {
    wrapper: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        borderButton: '1px solid gray',
    },
    greeting: {
        marginRigth: 8,
    },
};

const Toolbar = (props) => {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    return (
        // 로그인 여부를 나타내는 툴바
        <div style={style.wrapper}>
            {isLoggedIn && <span style={style.greeting}>환영합니다</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;