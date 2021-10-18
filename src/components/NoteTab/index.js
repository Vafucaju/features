import React from "react";
import { Container, Title, Date } from "./styles";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";

const NoteTab = ({ data, index }) => {
  const width = Dimensions.get("window").width - 40;
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate("Note", { data })}
      style={{ width: width / 2 - 10 }}
    >
      <Title numberOfLines={8}>{data.title}</Title>
      <Date>{data.date}</Date>
    </Container>
  );
};

export default NoteTab;
