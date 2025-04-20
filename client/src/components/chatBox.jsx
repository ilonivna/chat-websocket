import styles from './Chatbox.module.css';
import MessageList from './MessageList.jsx';
import TextField from './textField.jsx';
import TypingIndicator from './TypingIndicator.jsx';
import UserBar from "./userBar";

export default function Chatbox({ message, setMessage, sendMessage, chatMessages, setUsername, username, currentUser, socketRef, typingUsers }) {
  return (
    <div className={styles.chatbox}>
      <UserBar username={username} setUsername={setUsername} />
      
      <div className={styles.messagesContainer}>
        <MessageList data={chatMessages} currentUser={currentUser} socketRef={socketRef}/>
      </div>
<TypingIndicator typingUsers={typingUsers}/>
      <div className={styles.inputWrapper}>
        <TextField message={message} setMessage={setMessage} sendMessage={sendMessage} socketRef={socketRef} username={username}/>
      </div>
    </div>
  );
}
