import MessageList from "./MessageList";
import TextField from "./textField";
import UserBar from "./userBar";


export default function Chatbox({ message, setMessage, sendMessage, chatMessages, setUsername, username, currentUser }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        minHeight: 0,
      }}
    >
      <UserBar setUsername={setUsername} username={username}/>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <MessageList data={chatMessages} currentUser={currentUser}/>
      </div>

      <TextField setMessage={setMessage} message={message} sendMessage={sendMessage}/>
    </div>
  );
}
