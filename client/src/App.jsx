import { io } from "socket.io-client";
import React, { useEffect, useRef, useState } from 'react';
import Layout from './components/layout';
import Chatbox from './components/chatBox';

import "./App.css";


function App() {
const [message, setMessage] = useState("");
const [totalClients, setTotalClients] = useState(0);
const [username, setUsername] = useState('anonymous');
const [chatMessages, setChatMessages] = useState([]);


const socketRef = useRef();


//THIS EFFECT IS DONE ONLY ONCE ON MOUNT
  useEffect(() => {
    const socket = io("https://chat-websocket-r6s2.onrender.com");
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("clients-total", (data) => {
      setTotalClients(data);
    });

    socket.on("chat-message", (data) => {
      setChatMessages(prev => [...prev, data]);
    });

    return () => socket.disconnect(); // cleanup on unmount
  }, []);


   // message sending handler
   const sendMessage = () => {
    if (socketRef.current && message.trim() !== "") {
      const data = {
        name: username,
        message,
        date: new Date(),
      };
      socketRef.current.emit("chat-message", data);
      setMessage(""); // to clear input after sending
    }
  };
  return (

    <div>
      <Layout totalClients={totalClients}>
        <Chatbox message={message} setMessage={setMessage} sendMessage={sendMessage} chatMessages={chatMessages} setUsername={setUsername} username={username} currentUser={username}/>
      </Layout>

      
    </div>
  );
}
export default App;