import styled from "styled-components/native";

export const MessageLine = styled.View`
  margin-bottom: 10px;
  justify-content: ${(props) => props.author};
  flex-direction: row;
`;
export const MessageItemContainer = styled.View`
  background-color: ${(props) => props.author};
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  padding: 3px;
  max-width: 70%;
`;
export const MessageText = styled.Text`
  font-size: 14px;
  margin: 5px 45px 5px 5px;
`;
export const MessageDate = styled.Text`
  font-size: 11px;
  color: #999;
  margin-right: 5px;
  text-align: right;
  height: 15px;
  margin-top: -15px;
`;
