
import MessageList from "./MessageList";
import TextField from "./textField";
import UserBar from "./userBar";



export default function Chatbox() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1,  minHeight: 0}}>
            <UserBar/>
            <div style={{ flex: 1, overflowY: 'auto' }}><MessageList/></div>
            
            <TextField/>
        </div>
    )
}