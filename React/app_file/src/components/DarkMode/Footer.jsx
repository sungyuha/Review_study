import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const Header = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark); // isDark가 false라면 ture로, ture라면 false로 바꿔줌
    };

    return (
        <footer
            className='header'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
            }}
        >
            <button className='btn' onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
}

export default Header;