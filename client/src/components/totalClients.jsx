export default function TotalClients({data}) {
    return (
        <div style={{ maxWidth: 480, margin: '0 auto', border: '1px solid grey', height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '20px', overflow: 'hidden', marginTop: '20px'}}>
            <p>Total clients: {data}</p>
        </div>
    )
}