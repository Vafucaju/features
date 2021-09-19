import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContextProvider from "./src/contexts/UserContext";
import Lista from "./src/screens/Lista";
import ChatList from "./src/screens/ChatList";
import Chat from "./src/screens/Chat";
import NewChat from "./src/screens/NewChat";
import Login from "./src/screens/Login";
import { LogBox } from "react-native";
import _ from "lodash";

const Stack = createNativeStackNavigator();

function App() {
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(["Setting a timer"]);
  const _console = _.clone(console);
  console.warn = (message) => {
    if (message.indexOf("Setting a timer") <= -1) {
      _console.warn(message);
    }
  };
  return (
    <UserContextProvider>
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
            options={{ headerShown: false }}
            component={Chat}
          />
          <Stack.Screen name="NewChat" component={NewChat} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
