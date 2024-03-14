export default function Layout(props) {
    return (
        <form>
            <h2>Create</h2>
            {props.children} {/** 경로 */}
        </form>
    );
}