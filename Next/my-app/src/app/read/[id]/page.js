// 다이나믹 라우팅

export default function Read(props) {
    return (
        <>
            <h2>Read</h2>
            paramters : {props.params.id} {/** read밑 [id]라는 폴더 안의 컨텐트 값을 가져올 수 있음 */}
        </>
    )
}