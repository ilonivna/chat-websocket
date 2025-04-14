export default function IsTyping({ user }) {
    return (
        <div>
            {user && <p>{user} is typing...</p>}
            <p>...is typing</p>
        </div>
    )
}