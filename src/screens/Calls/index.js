import React from "react";
import { Button, View } from "react-native";
import * as Notifications from "expo-notifications";
// import { Container } from './styles';

const Calls = () => {
  async function schedulePushNotification() {
    // await Notifications.scheduleNotificationAsync({
    //   content: {
    //     attachments: { identifier: "wZfhQRPXHoFovGlTTHpUew" },
    //     title: "You've got mail! 📬",
    //     body: "Here is the notification body",
    //     data: { data: "goes here" },
    //   },
    //   trigger: null,
    // });
    let reponse = fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[YoMPFjK3_WvDoi-Rw2VUfR]",
        sound: "default",
        title: "Demo",
        body: "Demo notification",
        data: { teste: "testando a data" },
      }),
    });
  }

  return (
    <View>
      <Button title="Enviar" onPress={schedulePushNotification} />
    </View>
  );
};

export default Calls;
