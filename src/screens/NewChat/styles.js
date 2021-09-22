import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  height: 80px;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  background: #fff;
`;
export const Body = styled.View`
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  height: 80px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  flex-direction: row;
`;
export const Info = styled.View``;
export const Content = styled.View``;
export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const Name = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;
export const Message = styled.Text`
  color: #969696;
  font-size: 15px;
`;
export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  border-radius: 30px;
`;

export const Header = styled.View`
  margin-top: 20px;
  background-color: #075e55;
  height: 80px;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`;

export const BackButton = styled.TouchableOpacity``;
export const BackButtonIcon = styled(Feather)``;

export const InfoC = styled.View`
  flex: 1;
  margin-left: 30px;
`;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
export const NumberContacts = styled.Text`
  color: #fff;
`;

export const SearchButton = styled.TouchableOpacity``;
export const SearchIcon = styled(Feather)``;
export const InputArea = styled.View`
  flex: 1;
  height: 60px;
  justify-content: center;
  margin-left: 20px;
`;
export const Input = styled.TextInput`
  color: #fff;
  font-size: 18px;
`;
