'use Client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function Controll() {
  const params = useParams();
  const id = params.id; // 별도의 변수
  return (
    <ul>
      <li><Link href='/create'>Create</Link></li>
      {/* 특정한 글을 선택하면 update & delete 버튼 생성 */}
      {id ? <>
        <li><Link href={'/update/'+id}>Update</Link></li>
        <li><input type='button' value='delete' /></li>
      </> : null}
    </ul>
  );
}
