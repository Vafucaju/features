import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useContext } from "react";
import api from "../../api";
import { UserContext } from "../../contexts/UserContext";
import {
  Container,
  Body,
  Info,
  Name,
  Message,
  Avatar,
  Scroll,
  Header,
  BackButton,
  BackButtonIcon,
  InfoC,
  Title,
  NumberContacts,
  SearchButton,
  SearchIcon,
  InputArea,
  Input,
} from "./styles";

const NewChat = () => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [chatsList, setChatsList] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { dispatch: userDispatch, state } = useContext(UserContext);
  const user = state.user;
  const navigation = useNavigation();

  useEffect(() => {
    const getList = async () => {
      const results = await api.getContactList(user);
      setList(results);
      setOriginalList(results);

      const unSub = api.onChatList(user, setChatsList);

      return unSub;
    };
    navigation.setOptions({
      title: "Contatos",
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: "#075E55" },
      headerShown: false,
    });
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

  useEffect(() => {
    if (searchText === "") {
      setList(originalList);
    } else {
      setList(
        originalList.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  return (
    <>
      <Header>
        {!openSearch ? (
          <>
            <BackButton onPress={() => navigation.goBack()}>
              <BackButtonIcon name="arrow-left" color="#fff" size={30} />
            </BackButton>
            <InfoC>
              <Title>Contatos</Title>
              <NumberContacts>
                {list.length} {list.length === 1 ? "Contato" : "Contatos"}
              </NumberContacts>
            </InfoC>
            <SearchButton onPress={() => setOpenSearch(true)}>
              <SearchIcon name="search" color="#fff" size={30} />
            </SearchButton>
          </>
        ) : (
          <>
            <BackButton onPress={() => setOpenSearch(false)}>
              <BackButtonIcon name="arrow-left" color="#fff" size={30} />
            </BackButton>
            <InputArea>
              <Input
                value={searchText}
                onChangeText={(t) => setSearchText(t)}
                placeholder="Pesquisar..."
                placeholderTextColor="#fff"
                onFocus={() => setOriginalList(list)}
              />
            </InputArea>
          </>
        )}
      </Header>
      <Scroll>
        {list.map((item, key) => (
          <Container key={key} onPress={() => createNewChat(item)}>
            <Avatar source={{ uri: `https://i.pravatar.cc/300?img=${key}` }} />
            <Body>
              <Info>
                <Name>{item.name}</Name>
                <Message>Olá! Estou usando WhatsApp.</Message>
              </Info>
            </Body>
          </Container>
        ))}
      </Scroll>
    </>
  );
};

export default NewChat;
