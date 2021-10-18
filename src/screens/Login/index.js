import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect, useContext, useRef } from "react";
import { Button, TextInput, View } from "react-native";
import api from "../../api";
import { UserContext } from "../../contexts/UserContext";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

// import { Container } from './styles';

const Login = () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  useEffect(() => {
    registerForPushNotificationsAsync().then(async (token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const data = response.notification.request.content.data;
        if (data.type === "openChat") {
          userDispatch({
            type: "setActiveChat",
            payload: {
              activeChat: data.active,
            },
          });
          navigation.navigate("Chat", {
            name: data.active.title,
            active: data.active,
          });
        }
      });
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      await AsyncStorage.setItem("token", token);
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }

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
