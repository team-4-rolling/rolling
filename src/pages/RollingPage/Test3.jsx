import { MessageBox, GridBoxes } from "./TestStyle";

export function Message({ message }) {
  return (
    <MessageBox>
      <p>{message.recipientId}</p>
      <p>sender:{message.sender}</p>
      <p>{message.content}</p>
    </MessageBox>
  );
}

function Test3({ messages }) {
  return (
    <GridBoxes>
      {messages.map((message) => {
        return (
          <li key={message.id}>
            <Message message={message} />
          </li>
        );
      })}
    </GridBoxes>
  );
}

export default Test3;
