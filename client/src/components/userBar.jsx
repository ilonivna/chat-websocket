export default function UserBar() {
    return (
        <div>
            <p>User name/avatar here</p>
            <input type="text" value="anonymous" id="name-input" maxLength={20}/>
        </div>
    )
}