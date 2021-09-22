import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 80px;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  background: #fff;
  position: relative;
  display: ${(props) => props.display};
`;
export const DisplayName = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

export const DisplayLastMessage = styled.Text`
  color: #969696;
  font-size: 15px;
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
export const DateBox = styled.View`
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  height: 100%;
  justify-content: center;
`;

export const Date = styled.Text`
  color: #969696;
  margin-right: 8px;
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  margin-right: 10px;
  border-radius: 30px;
`;
