import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, View } from "react-native";

// import { Container } from './styles';

const Status = () => {
  const navigation = useNavigation();

  const logOut = async () => {
    await AsyncStorage.removeItem("user");
    navigation.navigate("Login");
  };
  return <Button onPress={logOut} title="Sair" />;
};

export default Status;
