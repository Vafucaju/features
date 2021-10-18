import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../contexts/NoteContext";
import {
  Container,
  NoteList,
  Header,
  Title,
  SearchIcon,
  AddButton,
  AddIcon,
} from "./styles";
import NoteTab from "../../components/NoteTab";
import NoteButton from "../../components/NoteButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainNote = () => {
  const { state, dispatch: noteDispatch } = useContext(NoteContext);
  const navigation = useNavigation();

  const getNotes = async () => {
    let notes = await AsyncStorage.getItem("notes");
    if (notes) {
      notes = JSON.parse(notes);
      noteDispatch({
        type: "setNotes",
        payload: {
          notes,
        },
      });
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const HeaderComponent = () => (
    <Header>
      <Title>Notes</Title>
      <NoteButton>
        <SearchIcon name="search" color="#fff" size={25} />
      </NoteButton>
    </Header>
  );

  return (
    <Container>
      <HeaderComponent />
      <NoteList
        data={state.notes}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 15,
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <NoteTab data={item} />}
      />
      <AddButton onPress={() => navigation.navigate("CreateNote")}>
        <AddIcon name="plus" color="#fff" size={25} />
      </AddButton>
    </Container>
  );
};

export default MainNote;
