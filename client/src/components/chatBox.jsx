import styles from './Chatbox.module.css';
import MessageList from './MessageList.jsx';
import TextField from './textField.jsx';
import UserBar from "./userBar";

export default function Chatbox({ message, setMessage, sendMessage, chatMessages, setUsername, username, currentUser }) {
  return (
    <div className={styles.chatbox}>
      <UserBar username={username} setUsername={setUsername} />
      
      <div className={styles.messagesContainer}>
        <MessageList data={chatMessages} currentUser={currentUser} />
      </div>

      <div className={styles.inputWrapper}>
        <TextField message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}
