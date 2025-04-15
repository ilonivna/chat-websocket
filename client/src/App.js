import { io } from "socket.io-client";
import React, { useEffect, useState } from 'react';
import Layout from './components/layout';
import Chatbox from './components/chatBox';
import TotalClients from './components/totalClients';
import "./App.css";


function App() {
const [totalClients, setTotalClients] = useState(0);
  useEffect(() => {
    const socket = io("http://localhost:5001");

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("clients-total", (data) => {
      console.log(data);
      setTotalClients(data);
    });

    return () => socket.disconnect(); // cleanup on unmount
  }, []);

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
  return (

    <div>

      <h1>{message}</h1>
      <Layout>
        <Chatbox/>
      </Layout>

      <TotalClients data={totalClients}/>
    </div>
  );
}
export default App;