import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect, useContext } from "react";
import { Button, TextInput } from "react-native";
import api from "../../api";
import { UserContext } from "../../contexts/UserContext";

// import { Container } from './styles';

const Login = () => {
  const { dispatch: userDispatch, state } = useContext(UserContext);
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const handleFacebookLogin = async () => {
    if (name !== "") {
      await api.signIn(name);
      await AsyncStorage.setItem("user", name);
      userDispatch({
        type: "setUser",
        payload: {
          user: name,
        },
      });
      navigation.navigate("ChatList");
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        userDispatch({
          type: "setUser",
          payload: {
            user,
          },
        });
        navigation.navigate("ChatList");
      }
    };
    const erase = () => AsyncStorage.clear();
    // erase();
    getUser();
  }, []);
  return (
    <>
      <TextInput
        onChangeText={(t) => setName(t)}
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: "#000",
          backgroundColor: "#fff",
          color: "#000",
          paddingLeft: 16,
        }}
      />
      <Button onPress={handleFacebookLogin} title="Login" />
    </>
  );
};

export default Login;
