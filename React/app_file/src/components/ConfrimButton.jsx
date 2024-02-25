import React, { useState } from 'react';

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        // 버튼을 누르면 '확인됨'으로 변경되며 클릭을 할 수 없게 만듬
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? '확인됨' : '확인하기'}
        </button>
    );
}

export default ConfirmButton;