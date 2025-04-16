export default function Stamp({date}) {
    
    const dateObj = new Date(date);
 
    return (
        <div>
            <p style={{ fontSize: '12px' }}>{dateObj.toLocaleTimeString()}</p>
        </div>
    )
}