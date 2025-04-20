import { IoIosSend } from "react-icons/io";
import styles from "./TextField.module.css";
import {debounce} from "lodash";

export default function TextField({
  setMessage,
  message,
  sendMessage,
  socketRef,
  username,
}) {
  const handleSend = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const emitTyping = debounce(() => {
    socketRef.current.emit("typing", username);
  }, 500); //  emits if no keystroke for 500ms

  return (
    <div className={styles.textFieldWrapper}>
      
      <form onSubmit={handleSend} className={styles.form}>
        <textarea
          className={styles.textarea}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            emitTyping();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type your message here..."
        />
        <button type="submit" className={styles.sendButton}>
          <IoIosSend size={28} />
        </button>
      </form>
    </div>
  );
}
