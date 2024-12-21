import { useContext } from "react";

import { MessageContainer, MessageComponent } from "./styles";
import Button from "components/Button/Button";
import { MessagePost } from "../BlogManagment/BlogManagment";

function Message() {
  const { message, onPostChange } = useContext(MessagePost);
  // console.log(message);

  const onDeleteMessage = () => {
    onPostChange("");
  };

  return (
    <MessageComponent>
      <MessageContainer>{message}</MessageContainer>
      <Button name="Delete" onClick={onDeleteMessage} />
    </MessageComponent>
  );
}

export default Message;
