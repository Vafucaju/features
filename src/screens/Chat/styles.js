import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  padding: 20px 30px;
`;
export const MessageList = styled.ScrollView`
  flex: 1;
`;
export const InputArea = styled.View`
  height: 60px;
  background-color: blue;
  flex-direction: row;
  border-radius: 5px;
`;
export const Input = styled.TextInput`
  flex: 1;
  padding-left: 16px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #333;
`;
