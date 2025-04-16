export default function UserBar({ setUsername, username }) {

  return (
    <div>
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
