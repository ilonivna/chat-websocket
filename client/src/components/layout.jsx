import Header from "./header";
import Footer from "./footer";


export default function Layout ({children}) {
    return (
<div style={{ maxWidth: 480, margin: '0 auto', border: '1px solid grey', height: 900, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', borderRadius: '20px', overflow: 'hidden'}}>
<header style={{backgroundColor: 'lightgray', width: '100%', textAlign: 'center'}}>
    <div></div>
<Header/>
</header>
<main style={{ flex: 1, minHeight: 0}}>
{children}
</main>
<footer style={{backgroundColor: 'lightgray', width: '100%', textAlign: 'center'}}>
<Footer/>
</footer>
</div>
    );
}

