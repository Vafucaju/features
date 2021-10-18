import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserContextProvider from "./src/contexts/UserContext";
import NoteContextProvider from "./src/contexts/NoteContext";
import Lista from "./src/screens/Lista";
import ChatList from "./src/screens/ChatList";
import Chat from "./src/screens/Chat";
import NewChat from "./src/screens/NewChat";
import Login from "./src/screens/Login";
import MainTab from "./src/stacks/MainTab";
import Plim from "./src/screens/Plim";
import MainNote from "./src/screens/MainNote";
import Note from "./src/screens/Note";
import CreateNote from "./src/screens/CreateNote";
import NotePreload from "./src/screens/NotePreload";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <NoteContextProvider>
      <UserContextProvider>
        <ExpoStatusBar style="light" backgroundColor="#064B46" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Plim">
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
            <Stack.Screen
              name="MainNote"
              options={{ headerShown: false }}
              component={MainNote}
            />
            <Stack.Screen name="NotePreload" component={NotePreload} />
            <Stack.Screen name="Plim" component={Plim} />
            <Stack.Screen
              name="Note"
              options={{ headerShown: false }}
              component={Note}
            />
            <Stack.Screen
              name="CreateNote"
              options={{ headerShown: false }}
              component={CreateNote}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </NoteContextProvider>
  );
}

export default App;
