//'use client';
// import { useEffect, useState } from 'react';
import Link from 'next/link';
import './globals.css';

/*export const metadata = {
  title: 'Web tutorials',
  description: 'Generated by create next app',
}; - 서버 컴포넌트로 use client선언하면 클라이언트 컴포넌트가 되므로 에러 발생 */

export default async function RootLayout({ children }) {
  // 서버 컴포넌트
  const resp = await fetch('http://localhost:9999/topics', { cache: 'no-store' }); // 캐싱 정보를 저장하지 않음 -> 익숙해지면 캐싱 설정하기
  const topics = await resp.json();

  // const [topics, setTopics] = useState([]); // 클라이언트 컴포넌트여서 next에서는 에러가 발생

  /* useEffect(() => {
    fetch('http://localhost:9999/topics')
    .then(res => res.json())
    .then(result => {
      setTopics(result);
    });
  }, []);*/ 
  return (
    <html>
      <body>
        <h1><a href='/'>WEB</a></h1>
        <ol>
          {topics.map((topic) => {
            return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
          })}
        </ol>
        <ol>
          {children}
          <ul>
            <li><a href='/create'>Create</a></li>
            <li><a href='/update/1'>Update</a></li>
            <li><input type='button' value='delete' /></li>
          </ul>
        </ol>
      </body>
    </html>
  );
}
