import React from 'react';

const Header = ({ isDark }) => {
    return (
        <header
            className='header'
            style={{
                // 다크모드일때
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>Welcome 코딩즈!</h1>
        </header>
    );
}

export default Header;