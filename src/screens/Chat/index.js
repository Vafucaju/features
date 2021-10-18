import React, { useRef, useEffect, useState, useContext } from "react";
import EmojiSelector from "react-native-emoji-selector";
import { useRoute } from "@react-navigation/native";
import {
  Container,
  MessageList,
  InputArea,
  Input,
  SendMessageButton,
  SendMessageIcon,
  EmojiArea,
  EmojiButton,
  EmojiIcon,
  InputContainer,
} from "./styles";
import MessageItem from "../../components/MessageItem";
import api from "../../api";
import { UserContext } from "../../contexts/UserContext";
import ChatHeader from "../../components/ChatHeader";

const Chat = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const route = useRoute();
  const { state } = useContext(UserContext);
  const active = state.activeChat;
  const { id } = route.params;
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

  const handleSendMessage = async () => {
    if (message !== "") {
      api.sendMessage(active, state.user, "text", message, users);
      const response = await api.getChatUser(
        state.user,
        active.chatID === null ? id : active.chatID
      );

      setMessage("");

      fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: response.token,
          sound: "default",
          title: state.user,
          body: message,
          data: { type: "openChat", active },
        }),
      });
    }
  };

  const handleOnEmojiClick = (emoji) => {
    setMessage(message + emoji);
  };
  const handleOpenEmoji = () => {
    setShowEmoji(!showEmoji);
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
        <InputContainer>
          <InputArea>
            <EmojiButton onPress={handleOpenEmoji}>
              <EmojiIcon name="smile" size={30} color="#666" />
            </EmojiButton>
            <Input
              placeholder="Digite uma mensagem"
              value={message}
              onChangeText={(t) => setMessage(t)}
            />
          </InputArea>
          <SendMessageButton onPress={handleSendMessage}>
            <SendMessageIcon name="send" color="#fff" size={30} />
          </SendMessageButton>
        </InputContainer>
        <EmojiArea display={showEmoji ? "flex" : "none"}>
          <EmojiSelector
            showSearchBar={false}
            showSectionTitles={false}
            columns={9}
            onEmojiSelected={(emoji) => handleOnEmojiClick(emoji)}
          />
        </EmojiArea>
      </Container>
    </>
  );
};

export default Chat;
