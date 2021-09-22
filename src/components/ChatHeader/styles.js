import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  height: 80px;
  background-color: #075e55;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-left: 5px;
`;

export const BackIcon = styled(Ionicons)``;
export const BackButton = styled.TouchableOpacity``;

export const Body = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin: 0 10px;
`;
