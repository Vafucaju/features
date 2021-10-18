import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteButton from "../../components/NoteButton";
import {
  Container,
  Header,
  BackIcon,
  SaveText,
  SaveButton,
  NoteInput,
  TitleInput,
} from "./styles";

const CreateNote = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  useEffect(() => {
    const getNotes = async () => {
      let jsonNotes = await AsyncStorage.getItem("notes");
      if (jsonNotes) {
        jsonNotes = JSON.parse(jsonNotes);
        setNotes(jsonNotes);
      }
    };

    getNotes();
  }, []);

  const saveNote = async () => {
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();

    //   month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    const date = `${months[month]} ${day}, ${year}`;

    if (title !== "") {
      let newNotes = [...notes, { title, note, date }];
      newNotes = JSON.stringify(newNotes);

      await AsyncStorage.setItem("notes", newNotes);
      navigation.reset({
        routes: [{ name: "MainNote" }],
      });
    }
  };

  const HeaderComponent = () => (
    <Header>
      <NoteButton onPress={() => navigation.goBack()}>
        <BackIcon name="chevron-left" color="#fff" size={30} />
      </NoteButton>
      <SaveButton onPress={saveNote}>
        <SaveText>Save</SaveText>
      </SaveButton>
    </Header>
  );
  return (
    <Container>
      <HeaderComponent />
      <TitleInput
        onChangeText={(t) => setTitle(t)}
        value={title}
        multiline
        placeholderTextColor="#fff"
        placeholder="Title"
      />
      <NoteInput
        value={note}
        onChangeText={(t) => setNote(t)}
        placeholderTextColor="#fff"
        placeholder="Digite alguma coisa..."
        multiline
      />
    </Container>
  );
};

export default CreateNote;
