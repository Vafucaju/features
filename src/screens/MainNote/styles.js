import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: #252525;
  margin-top: 20px;
  padding: 20px;
`;
export const NoteList = styled.FlatList``;
export const Scroll = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  background-color: red;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 100px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
`;
export const SearchButton = styled.View`
  background-color: #3b3b3b;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export const SearchIcon = styled(Feather)``;

export const AddButton = styled.TouchableOpacity`
  background-color: #3b3b3b;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;
export const AddIcon = styled(Feather)``;
