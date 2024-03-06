// ForwardRef는 부모 컴포넌트에서 자녀 컴포넌트로 Ref를 전달할때 사용 / 부모 컴포넌트가 자녀 컴포넌트의 DOM 요소에 접근해야할때 유용하게 사용

import { useRef } from 'react';
import MyInput from './MyInput';

export default function AppComment() {
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <MyInput ref={inputRef} />
            <button onCanPlay={focus}>집중</button>
        </div>
    );
}