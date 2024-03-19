'use Client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

export function Controll() {
  const params = useParams();
  const router = useRouter(); // /로 리디렉션 작용
  const id = params.id; // 별도의 변수
  return (
    <ul>
      <li><Link href='/create'>Create</Link></li>
      {/* 특정한 글을 선택하면 update & delete 버튼 생성 */}
      {id ? <>
        <li><Link href={'/update/'+id}>Update</Link></li>
        <li><input type='button' value='delete' onClick={() => {
          const options = {method: 'DELETE'}
          fetch('http://localhost:9999/topics/'+id)
          .then(resp => resp.json())
          .then(result => {
            // 사용자 데이터 삭제 -> /로 리디렉션
            router.push('/');
            router.refresh;
          });
        }}/></li>
      </> : null}
    </ul>
  );
}
