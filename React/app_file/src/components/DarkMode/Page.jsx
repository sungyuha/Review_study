import React from 'react';

const Page = ({ isDark, setIsDark }) => { // Props로 받아옴
    return (
        <div className='page'>
            <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    );
}

export default Page;