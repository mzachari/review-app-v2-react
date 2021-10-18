import { createContext, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket(
  "wss://kv4s7e5pj3.execute-api.ap-south-1.amazonaws.com/dev"
);

const WebSocketContext = createContext({
  client: client,
  sendMessage: () => {},
});

export function WebSocketContextProvider(props) {
  useEffect(() => {
    setUpWebSocketConnection(client);
  });

  const setUpWebSocketConnection = (client) => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
  };

  const sendMessage = (body) => {
    client.send(JSON.stringify(body));
  };

  const context = {
    client: client,
    sendMessage: sendMessage,
  };
  return (
    <WebSocketContext.Provider value={context}>
      {props.children}
    </WebSocketContext.Provider>
  );
}

export default WebSocketContext;
