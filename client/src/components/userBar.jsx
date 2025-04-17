import styles from './UserBar.module.css';

export default function UserBar({ setUsername, username }) {
  return (
    <div className={styles.userBar}>
      <p className={styles.label}>Click to change:</p>
      <input
        type="text"
        className={styles.input}
        value={username}
        maxLength={20}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            setUsername(e.target.value);
          }
        }}
      />
    </div>
  );
}

