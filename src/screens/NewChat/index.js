import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import api from "../../api";
import ChatItem from "../../components/ChatItem";
import { UserContext } from "../../contexts/UserContext";
// import { Container } from './styles';

const NewChat = () => {
  const [list, setList] = useState([]);
  const [chatsList, setChatsList] = useState([]);
  const { dispatch: userDispatch, state } = useContext(UserContext);
  const user = state.user;
  const navigation = useNavigation();

  useEffect(() => {
    const getList = async () => {
      const results = await api.getContactList(user);
      setList(results);

      const unSub = api.onChatList(user, setChatsList);

      return unSub;
    };
    getList();
  }, []);

  const createNewChat = async (data) => {
    const id = await api.addNewChat({ id: user, name: user }, data);

    userDispatch({
      type: "setActiveChat",
      payload: {
        activeChat: {
          chatID: id,
          title: data.name,
          with: data.name,
        },
      },
    });

    navigation.navigate("Chat", { name: data.name, id });
  };

  return (
    <View>
      {list.map((item, key) => (
        <TouchableOpacity
          style={{ height: 40, backgroundColor: "#888", margin: 5 }}
          key={key}
          onPress={() => createNewChat(item)}
        >
          <View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NewChat;
