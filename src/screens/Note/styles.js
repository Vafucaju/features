import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  margin-top: 20px;
`;
export const Header = styled.View`
  height: 100px;
  background-color: #252525;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  flex-direction: row;
`;
export const BackButton = styled.TouchableOpacity`
  background-color: #3b3b3b;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export const EditButton = styled.TouchableOpacity`
  background-color: #3b3b3b;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export const BackButtonIcon = styled(Feather)``;
export const EditButtonIcon = styled(Feather)``;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
  background-color: #252525;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const DateText = styled.Text`
  color: #fff;
  opacity: 0.5;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const NoteText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 50px;
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
  margin-bottom: 50px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3b3b3b;
  width: 80px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
