import { io } from "socket.io-client";
import React, { useEffect, useRef, useState } from 'react';
import Layout from './components/layout';
import Chatbox from './components/chatBox';
import TotalClients from './components/totalClients';
import "./App.css";


function App() {
const [message, setMessage] = useState("");
const [totalClients, setTotalClients] = useState(0);
const [username, setUsername] = useState('anonymous');
const [messageServer, setMessageServer] = useState('');
const [chatMessages, setChatMessages] = useState([]);


const socketRef = useRef();


//THIS EFFECT IS DONE ONLY ONCE ON MOUNT
  useEffect(() => {
    const socket = io("http://localhost:5001");
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

  //THIS EFFECT FETCHES  API greeting WHEN SERVER IS LIVE
  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessageServer(data))
      .catch((err) => console.log(err));
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

      <h1>{messageServer}</h1>
      <Layout>
        <Chatbox message={message} setMessage={setMessage} sendMessage={sendMessage} chatMessages={chatMessages} setUsername={setUsername} username={username} currentUser={username}/>
      </Layout>

      <TotalClients data={totalClients}/>
    </div>
  );
}
export default App;