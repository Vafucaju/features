import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  DisplayName,
  Avatar,
  DisplayLastMessage,
  Body,
  Info,
  Date,
  DateBox,
} from "./styles";
import api from "../../api";
import { TimeFormatter } from "../../helpers";

const ChatItem = ({ data, active, onPress, avatarIndex }) => {
  const navigation = useNavigation();
  const [time, setTime] = useState("");

  useEffect(() => {
    if (data.lastMessageDate > 0) {
      setTime(TimeFormatter(data.lastMessageDate.seconds));
    }
  }, [data]);

  const goToChatWith = async () => {
    // await api.addNewChat({ id: user, name: user }, data);
    onPress();
    navigation.navigate("Chat", { name: data.title, active });
  };
  return (
    <Container
      display={data.lastMessageDate ? "flex" : "none"}
      onPress={goToChatWith}
    >
      <Avatar
        source={{ uri: `https://i.pravatar.cc/300?img=${avatarIndex}` }}
      />
      <Body>
        <Info>
          <DisplayName>{data.title}</DisplayName>
          {data.lastMessage && (
            <DisplayLastMessage numberOfLines={1} ellipsizeMode="tail">
              {data.lastMessage}
            </DisplayLastMessage>
          )}
        </Info>
      </Body>
      <DateBox>
        <Date>{time}</Date>
      </DateBox>
    </Container>
  );
};

export default ChatItem;
