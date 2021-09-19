import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, DisplayName } from "./styles";
import api from "../../api";
import { TimeFormatter } from "../../helpers";

const ChatItem = ({ data, active, onPress, user }) => {
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
    <Container onPress={goToChatWith}>
      <DisplayName>{data.title}</DisplayName>
    </Container>
  );
};

export default ChatItem;
