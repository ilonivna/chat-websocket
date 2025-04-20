import Message from "./message.jsx"
import styles from './MessageList.module.css';
import { useRef, useEffect } from "react";

export default function MessageList({ data, currentUser }) {
  const bottomRef = useRef();

  useEffect(()=>{
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data])
  return (
    <div className={styles.messageList}>
      <ul>
        {data.length > 0 &&
          data.map((item) => (
            <li key={item.date} className={styles.messageItem}>
              <Message data={item} currentUser={currentUser}/>
            </li>
          ))}
      </ul>
      <div ref={bottomRef} />
    </div>
  );
}
