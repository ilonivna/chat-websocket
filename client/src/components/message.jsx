import Stamp from "./stamp";

export default function Message({ data }) {
  const { name, message, date } = data;

  return (
    <div style={{backgroundColor: 'lightsalmon', borderRadius: '10px', paddingLeft: '5px', paddingRight: '5px'}}>
      <div style={{ display: "flex", gap: '10px', alignItems: 'center', justifyContent: 'flex-end'}}>
        <p style={{ fontSize: "14px", color: "blue" }}>{name}</p>
        <Stamp date={date} />
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}
