import React, { useEffect, useState, useContext } from "react";
import { Container, ChatArea, NewChatButton, NewChatIcon } from "./styles";
import ChatItem from "../../components/ChatItem";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import api from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../contexts/UserContext";

export default ChatList = () => {
  const navigation = useNavigation();
  const [list, setList] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const { dispatch: userDispatch, state } = useContext(UserContext);
  const user = state.user;

  const goToCreateNewChat = () => {
    navigation.navigate("NewChat");
  };

  useEffect(() => {
    const getChatList = async () => {
      if (user) {
        const unSub = api.onChatList(user, setList);
        return unSub;
      }
    };
    getChatList();
  }, []);

  const settingActiveChat = (chat) => {
    userDispatch({
      type: "setActiveChat",
      payload: {
        activeChat: chat,
      },
    });
  };

  return (
    <>
      <Container>
        <ChatArea>
          {list.map((item, key) => (
            <ChatItem
              key={key}
              data={item}
              user={user}
              avatarIndex={key}
              // active={activeChat.chatId === list[key].chatId}
              active={activeChat}
              onPress={() => settingActiveChat(list[key])}
            />
          ))}
        </ChatArea>
      </Container>
      <NewChatButton onPress={goToCreateNewChat}>
        <NewChatIcon name="chat" color="#fff" size={25} />
      </NewChatButton>
    </>
  );
};
