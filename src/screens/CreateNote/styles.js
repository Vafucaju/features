import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #252525;
  margin-top: 20px;
  padding: 20px;
`;
export const Header = styled.View`
  flex-direction: row;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`;
export const BackIcon = styled(Feather)``;

export const SaveButton = styled.TouchableOpacity`
  background-color: #3b3b3b;
  width: 80px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const SaveText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const TitleInput = styled.TextInput`
  min-height: 80px;
  color: #fff;
  font-size: 36px;
  margin-bottom: 20px;
`;
export const NoteInput = styled.TextInput`
  min-height: 80px;
  color: #fff;
  font-size: 20px;
`;
