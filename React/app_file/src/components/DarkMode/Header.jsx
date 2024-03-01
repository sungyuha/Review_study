import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const Header = () => {
    const {isDark} = useContext(ThemeContext); // props를 사용하지 않고 useContext로 데이터 받아옴

    return (
        <header
            className='header'
            style={{
                // isDark가 기본은 fasle
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>Welcome 코딩즈!</h1>
        </header>
    );
}

export default Header;