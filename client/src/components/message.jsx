import Stamp from "./stamp.jsx";
import styles from './Message.module.css';

export default function Message({ data, currentUser }) {
  const { name, message, date } = data;

  return (
    <div className={styles.cont}>
    <div className={`${styles.message} ${name === currentUser ? styles.currentUser : styles.otherUser}`}>
      <div className={styles.messageHeader}>
        <p className={styles.name}>{name}</p>
        <Stamp date={date} />
      </div>
      <div>
        <p className={styles.messageText}>{message}</p>
      </div>
    </div>
    </div>
  );
}
