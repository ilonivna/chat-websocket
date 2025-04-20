import styles from './TypingIndicator.module.css';

export default function TypingIndicator({ typingUsers }) {
  if (typingUsers.length === 0) return null;

  return (
    <div className={styles.typingBox}>
      {typingUsers.join(", ")} typing
      <span className={styles.dot}>.</span>
      <span className={styles.dot}>.</span>
      <span className={styles.dot}>.</span>
    </div>
  );
}