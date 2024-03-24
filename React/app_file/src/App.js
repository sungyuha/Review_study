import { useState } from 'react';
import './components/DarkMode/Page.css';
import { ThemeContext } from'./components/DarkMode/context/ThemeContext';
import { UserContext } from'./components/DarkMode/context/UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}> {/** value라는 props를 하나 받음, value안에는 전달하고자 하는 데이터를 넣어주면 됨 */}
        {/* <Page /> */}
      </ThemeContext.Provider> {/** context를 불러와서 모든 하위 컴포넌트들에게 필요한지 방송 */}
    </UserContext.Provider>
  );
}

export default App;
