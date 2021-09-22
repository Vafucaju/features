import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Container, Title, BackIcon, BackButton, Body, Avatar } from "./styles";

const ChatHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton onPress={() => navigation.navigate("MainTab")}>
        <BackIcon name="arrow-back" color="#fff" size={32} />
      </BackButton>
      <Body>
        <Avatar source={{ uri: `https://i.pravatar.cc/300?img=0` }} />
        <Title>{title}</Title>
      </Body>
    </Container>
  );
};

export default ChatHeader;
