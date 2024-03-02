import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

const Header = () => {
    const {isDark} = useContext(ThemeContext); // props를 사용하지 않고 useContext로 데이터 받아옴
    const user = useContext(UserContext);

    return (
        <header
            className='header'
            style={{
                // isDark가 기본은 fasle
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <h1>Welcome {user}!</h1>
        </header>
    );
}

export default Header;