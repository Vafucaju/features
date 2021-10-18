import React from "react";

import { Container } from "./styles";

const NoteButton = ({ children, onPress }) => {
  return <Container onPress={onPress}>{children}</Container>;
};

export default NoteButton;
