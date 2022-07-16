import './App.css';

import { Input, Button } from 'antd';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {

  const send = () => {
    axios.post('http://127.0.0.1:3001/api/v1/chat/getResponse', {
      msg: iput.current.input.defaultValue
    })
    .then((response) => {
      if (response.data.statusCode === 200) setMsgs([...msgs, [iput.current.input.defaultValue, 0], [response.data.data, 1]]);
    })
    .catch((error) => {
      console.info(error);
    });
  }

  const [msgs, setMsgs] = useState([["Xin chào!!!", 1]]);

  useEffect(() => {
 
  }, []);

  const msgList = msgs.map((msg, id) => {
    if (msg[1] === 1) return (
      <div key={id} className="msgBoxLeft">{msg[0]}</div>
    )
    return (
      <div key={id} className="msgBoxRight">{msg[0]}</div>
    )
  });

  const iput = useRef(null);

  return (
    <div className="App">
      <div className="msgBox">
        {msgList}
      </div>
      <Input.Group compact className="msgInput">
        <Input
          style={{
            width: 'calc(100% - 200px)',
          }}
          placeholder="Nhập tin nhắn..."
          ref={iput}
        />
        <Button type="primary" onClick={send}>Gửi</Button>
      </Input.Group>
    </div>
  );
}

export default App;
