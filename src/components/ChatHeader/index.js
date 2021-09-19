import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Container, Title, BackIcon, BackButton } from "./styles";

const ChatHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackIcon name="arrow-back" color="#000" size={32} />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
};

export default ChatHeader;
