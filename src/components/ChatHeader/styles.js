import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  height: 60px;
  background-color: #fff;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;
export const Title = styled.Text`
  font-size: 18px;
`;

export const BackIcon = styled(Ionicons)`
  margin-right: 40px;
`;
export const BackButton = styled.TouchableOpacity``;
