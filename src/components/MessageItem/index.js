import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TimeFormatter } from "../../helpers";
import {
  MessageLine,
  MessageItemContainer,
  MessageText,
  MessageDate,
} from "./styles";

const MessageItem = ({ data }) => {
  const [time, setTime] = useState("");
  const { state } = useContext(UserContext);
  const user = state.user;

  useEffect(() => {
    setTime(TimeFormatter(data.date.seconds));
  }, [data]);

  return (
    <MessageLine author={data.author === user ? "flex-end" : "flex-start"}>
      <MessageItemContainer author={data.author === user ? "#dcf8c6" : "#fff"}>
        <MessageText>{data.body}</MessageText>
        <MessageDate>{time}</MessageDate>
      </MessageItemContainer>
    </MessageLine>
  );
};

export default MessageItem;
