import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect, useContext } from "react";
import { Button, TextInput, View } from "react-native";
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

      navigation.reset({
        routes: [{ name: "MainTab" }],
      });
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
        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      }
    };
    const erase = () => AsyncStorage.clear();
    // erase();
    getUser();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        onChangeText={(t) => setName(t)}
        placeholder="Digite seu nome"
        style={{
          height: 40,
          width: "70%",
          borderWidth: 1,
          borderColor: "#000",
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: 20,
          paddingLeft: 16,
          marginBottom: 10,
        }}
      />
      <Button onPress={handleFacebookLogin} title="Login" />
    </View>
  );
};

export default Login;
