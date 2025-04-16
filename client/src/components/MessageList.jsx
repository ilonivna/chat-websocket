import Message from "./message";

export default function MessageList({ data }) {
  return (
    <div>
      <ul>
        {data.length > 0 &&
          data.map((item) => {
            return (<li key={item.date}>
              <Message data={item} />
            </li>)
          })}
      </ul>
    </div>
  );
}
