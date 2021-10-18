import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
export const Card = styled.View`
  width: 292px;
  height: 80px;
  background-color: #fff;
  border-radius: 8px;
  margin: 3px;
`;

export const AnimBorder = styled.View`
  position: relative;
  z-index: 0;
  width: 292px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2px;
  elevation: 2;
  margin-bottom: 20px;
`;
export const AnimBorderBefore = styled.View`
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -140%;
  width: 200%;
  height: 400%;
  background-color: #fff;
`;
export const Wrap = styled.View`
  width: 300px;
  height: 86px;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const Square = styled.View`
  width: 50%;
  height: 50%;
  background-color: #0057ff;
  position: relative;
  left: 0;
  top: 0;
`;
export const Content = styled.View`
  flex: 1;
  z-index: 99;
  background-color: #fff;
  border-radius: 10px;
`;
