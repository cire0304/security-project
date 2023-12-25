import React, { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [messageHistories, setmessageHistoies] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const webSocket = useRef<WebSocket | null>(null);
  const messageInputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    webSocket.current = new WebSocket("ws://localhost:8080/ws/chat");
    webSocket.current.onopen = () => {
      console.log("WebSocket 연결!");
    };
    webSocket.current.onclose = (error) => {
      console.log(error);
    };
    webSocket.current.onerror = (error) => {
      console.log(error);
    };
    webSocket.current.onmessage = (event: MessageEvent) => {
        setmessageHistoies((prev) => [...prev, event.data]);
    };

    return () => {
      webSocket.current?.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (webSocket.current === null) {
      console.log("웹소켓이 연결이 되어 있지 않습니다.");
      return;
    }
    if (webSocket.current.readyState === WebSocket.OPEN) {
      webSocket.current.send(message);
    }
  };



  return (
    <div>
      {messageHistories?.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <input style={{
        border: "1px solid black"
        }} 
        ref={messageInputElement}
         type="text" />
        <button onClick={() => {
            if (messageInputElement.current !== null) {
                const message = messageInputElement.current.value;
                sendMessage(message);
            }
            }}>
            버튼
        </button>
    </div>
  );
};

export default Chat;
