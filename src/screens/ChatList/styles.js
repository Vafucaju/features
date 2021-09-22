import styled from "styled-components/native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const ChatArea = styled.View`
  flex: 1;
  padding: 10px;
`;
export const NewChatButton = styled.TouchableOpacity`
  background-color: #21c65d;
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const NewChatIcon = styled(MaterialIcons)``;
