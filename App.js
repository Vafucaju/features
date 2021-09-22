import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContextProvider from "./src/contexts/UserContext";
import Lista from "./src/screens/Lista";
import ChatList from "./src/screens/ChatList";
import Chat from "./src/screens/Chat";
import NewChat from "./src/screens/NewChat";
import Login from "./src/screens/Login";
import MainTab from "./src/stacks/MainTab";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <UserContextProvider>
      <ExpoStatusBar style="light" backgroundColor="#064B46" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Lista" component={Lista} />
          <Stack.Screen
            name="ChatList"
            options={{ headerShown: false }}
            component={ChatList}
          />
          <Stack.Screen
            name="Chat"
            options={{
              headerShown: false,
            }}
            component={Chat}
          />
          <Stack.Screen name="NewChat" component={NewChat} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen name="MainTab" component={MainTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
