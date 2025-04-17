export default function UserBar({ setUsername, username }) {

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
        <p style={{ color: 'grey', fontSize: '12px'}}>Click to change: </p>
      <input
      style={{ background: 'none', border: 'none'}}
        type="text"
        onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              setUsername(e.target.value);  
                    
            }}}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        maxLength={20}
      />
    </div>
  );
}
