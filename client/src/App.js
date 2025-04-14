import React, { useEffect, useState } from 'react';
import Layout from './components/layout';
import Chatbox from './components/chatBox';
import TotalClients from './components/totalClients';
import "./App.css";


function App() {


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

      <TotalClients/>
    </div>
  );
}
export default App;