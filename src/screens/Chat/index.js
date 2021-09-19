import React, { useRef, useEffect, useState, useContext } from "react";
import { Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, MessageList, InputArea, Input } from "./styles";
import MessageItem from "../../components/MessageItem";
import api from "../../api";
import { UserContext } from "../../contexts/UserContext";
import ChatHeader from "../../components/ChatHeader";

const Chat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { state } = useContext(UserContext);
  const active = state.activeChat;
  const { name, id } = route.params;
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    scrollRef.current.scrollToEnd({ animated: false });
  }, [messages]);

  useEffect(() => {
    setMessages([]);
    if (active) {
      let unsub = api.onChatContent(
        active.chatID === null ? id : active.chatID,
        setMessages,
        setUsers
      );
      return unsub;
    }
  }, [active]);

  const handleSendMessage = () => {
    if (message !== "") {
      api.sendMessage(active, state.user, "text", message, users);
      setMessage("");
    }
  };

  return (
    <>
      <ChatHeader title={active.title} />
      <Container>
        <MessageList
          showsVerticalScrollIndicator={false}
          ref={scrollRef}
          onContentSizeChange={() =>
            scrollRef.current.scrollToEnd({ animated: true })
          }
        >
          {messages.map((item, key) => (
            <MessageItem data={item} key={key} />
          ))}
        </MessageList>
        <InputArea>
          <Input value={message} onChangeText={(t) => setMessage(t)} />
          <Button onPress={handleSendMessage} title="enviar" />
        </InputArea>
      </Container>
    </>
  );
};

export default Chat;
