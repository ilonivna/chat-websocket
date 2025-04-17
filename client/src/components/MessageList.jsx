import Message from "./message.jsx"
import styles from './MessageList.module.css';

export default function MessageList({ data, currentUser }) {
  return (
    <div className={styles.messageList}>
      <ul>
        {data.length > 0 &&
          data.map((item) => (
            <li key={item.date} className={styles.messageItem}>
              <Message data={item} currentUser={currentUser} />
            </li>
          ))}
      </ul>
    </div>
  );
}
