// Conditional Rendering : 조건에 따른 렌더링 -> 조건부 렌더링
// 조건부 렌더링 -> 어떠한 조건에 따라서 렌더링이 달라지는 것
// ex) true이면 버튼을 보여주고, false이면 버튼을 가린다

import React from 'react';

// 로그인 컨트롤 컴포넌트 : 사용자의 로그인 여부에 따라 앞에 나온 로그인 버튼과 로그아웃 버튼, 두 개의 컴포넌트를 선택적으로 보여줌
/*function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    )
}

export default LoginControl;*/

// lf-else문의 경우 ? 연사자를 리액르에선 자주 사용
function UserStatus(props) {
    return (
        <div>
            이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
        </div>
    );
}

export default UserStatus;