import { GridBoxes } from "./TestStyle";
import PostCardUI from "../../components/PostCardUl/PostCardUl";
export function Message({ message }) {
  return <PostCardUI data={message} />;
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
