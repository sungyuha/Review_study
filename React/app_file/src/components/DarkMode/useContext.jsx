// Context : 전역적으로 사용되는 데이터들을 여러 컴포넌트들끼리 쉽게 공유 할 수 있는 방법을 제공 -> context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공

import React, { useState } from 'react';

function Context() {
    const [isDark, setIsDark] = useState(false);

    return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default Context;