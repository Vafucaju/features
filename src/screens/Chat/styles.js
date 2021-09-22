import styled from "styled-components/native";
import { Ionicons, Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #eee;
  margin-bottom: 5px;
`;
export const MessageList = styled.ScrollView`
  flex: 1;
  padding: 0 30px;
  margin-top: 10px;
`;
export const SendMessageButton = styled.TouchableOpacity`
  justify-content: center;
  background-color: #03877a;
  height: 55px;
  width: 55px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
export const SendMessageIcon = styled(Ionicons)``;

export const InputArea = styled.View`
  flex: 1;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  background-color: #fff;
  margin-right: 8px;
  border: 1px solid rgba(33, 33, 33, 0.3);
`;
export const Input = styled.TextInput`
  width: 90%;
  padding: 0 16px;
  height: 45px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  border-radius: 30px;
  border: none;
`;
export const EmojiArea = styled.View`
  display: ${(props) => props.display};
  height: 300px;
  margin-top: 6px;
`;

export const EmojiButton = styled.TouchableOpacity`
  margin-left: 7px;
`;
export const EmojiIcon = styled(Feather)``;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;
