'use client'

import { useRouter } from 'next/navigation';

export default function Create() {
    const router = useRouter(); // 'use client'에서만 사용가능한 useRouter -> Next.js에서 제공하는 Hook 중 하나로, 현재 페이지의 라우터 정보를 가져올 수 있게 해주는 기능, useRouter를 사용하여 현재 페이지의 라우터 정보를 가져와서 해당 정보를 기반으로 동적으로 컴포넌트를 렌더링하거나 상태를 업데이트하는 등 다양한 작업을 수행
    
    return (
        <form onSubmit={(e) => {

            e.preventDefault(); // onSubmit이 실행됐을때 기본적인 동작 제어
            const title = e.target.title.value;
            const body = e.target.body.value;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, body})
            }
            // 서버로 데이터 전송
            fetch(`http://localhost:9999/topics`, options)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const lastid = result.id;
                // 리디렉션
                router.push(`/read/${lastid}`);
            })
        }}>
            <p>
                <input type='text' name='title' placeholder='title' />
            </p>
            <p>
                <textarea name='body' placeholder='body'></textarea>
            </p>
            <p>
                <input type='submit' value='create' />
            </p>
        </form>
    );
}