import React from "react";
import { Button, TouchableOpacity } from "react-native";
import styled from "styled-components";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ButtonContainer = styled.TouchableOpacity`
  elevation: 8;
  border-radius: 10px;
  padding-vertical: 17%; 10px;
  padding-horizontal: 12px;
  margin-top: 4%; 
  background-color: ${(props: {background_color: any; }) => props.background_color};
`;
// @ts-ignore
const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
`;

// @ts-ignore
const AppContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
  background-color: #eee;
`;

// @ts-ignore
const AppButton = ({ onPress, title, background_color }) => (
  <ButtonContainer onPress={onPress} background_color={background_color} >
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export {AppButton, AppContainer}