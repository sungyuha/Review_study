/* 웹앱 
1. HTML, CSS, JavaScript로 개발
2. 모바일 기기의 웹 브라우저로 앱처럼 사용

웹뷰
앱이 웹 콘텐츠를 표시하는데 사용할 수 있는 내장형 브라우저

=> 웹뷰 내에서 실행되는 자바스크립트는 기본 시스템 API를 호출할 수 있음 (이러한 기능을 브릿지 라고함.) */

/* 리액트 네이티브 웹뷰 추가
# WebView 라이브러리 설치
yarn add react-native-webview */

import { WebView } from 'react-native-webview';

export default function App(){
	return (
        <WebView style={styles.container} source={{ uri: 'https://github.com/hyeon9782' }} />
    )
}

// 출처 : https://www.youtube.com/watch?v=hsh8BS7gyrY&t=2131s