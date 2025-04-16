
export default function TextField({setMessage, message, sendMessage}) {
 

  const handleSend = (e) => {
    e.preventDefault();
    console.log(message);
    sendMessage();
  };
  return (
    <div>
      <form onSubmit={handleSend}>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();     // prevent new line on enter
              sendMessage();          // send message on enter
            }}}

          placeholder="Type your message here.."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
