// 다이나믹 라우팅

export default async function Read(props) { // 서버 컴포넌트로 변경
    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {cache: 'no-cache'});
    const topic = await resp.json();
    return (
        <>
            <h2>Read</h2>
            {topic.body}
            {/* paramters : {props.params.id} * read밑 [id]라는 폴더 안의 컨텐트 값을 가져올 수 있음 */}
        </>
    )
}