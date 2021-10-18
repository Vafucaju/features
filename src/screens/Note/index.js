import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import NoteButton from "../../components/NoteButton";
import {
  Container,
  Header,
  BackButtonIcon,
  Scroll,
  EditButtonIcon,
  DateText,
  NoteText,
  Title,
  NoteInput,
  TitleInput,
  ButtonText,
  Button,
} from "./styles";
import { NoteContext } from "../../contexts/NoteContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Note = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;
  const { state, dispatch: noteDispatch } = useContext(NoteContext);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [note, setNote] = useState(data.note);
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

  const deleteNote = async () => {
    const newNotes = state.notes.filter((item) => item.title !== data.title);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    noteDispatch({
      type: "setNotes",
      payload: {
        notes: newNotes,
      },
    });

    navigation.reset({
      routes: [{ name: "MainNote" }],
    });
  };

  const cancelEditing = () => {
    setEditing(false);
    setNote(data.note);
    setTitle(data.title);
  };

  const finishEditing = async () => {
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();

    //   month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    const date = `${months[month]} ${day}, ${year}`;

    let newNotes = state.notes;
    let objIndex = newNotes.findIndex((obj) => obj.title == data.title);

    if (title !== "") {
      newNotes[objIndex].title = title;
      newNotes[objIndex].note = note;
      newNotes[objIndex].date = date;

      await AsyncStorage.setItem("notes", JSON.stringify(newNotes));

      noteDispatch({
        type: "setNotes",
        payload: {
          notes: newNotes,
        },
      });

      setEditing(false);
    }
  };

  const HeaderComponent = () => (
    <Header>
      <NoteButton onPress={() => navigation.goBack()}>
        <BackButtonIcon name="chevron-left" color="#fff" size={30} />
      </NoteButton>
      {editing ? (
        <Button onPress={finishEditing}>
          <ButtonText>Save</ButtonText>
        </Button>
      ) : (
        <NoteButton onPress={() => setEditing(!editing)}>
          <EditButtonIcon name="edit" color="#fff" size={20} />
        </NoteButton>
      )}

      {editing ? (
        <Button onPress={cancelEditing}>
          <ButtonText>Cancel</ButtonText>
        </Button>
      ) : (
        <NoteButton onPress={deleteNote}>
          <EditButtonIcon name="trash-2" color="#fff" size={20} />
        </NoteButton>
      )}
    </Header>
  );
  return (
    <Container>
      <HeaderComponent />
      <Scroll>
        {!editing ? (
          <>
            <Title>{data.title}</Title>
            <DateText>{data.date}</DateText>
            <NoteText>{data.note}</NoteText>
          </>
        ) : (
          <>
            <TitleInput
              multiline
              onChangeText={(t) => setTitle(t)}
              value={title}
            />
            <NoteInput
              placeholderTextColor="#fff"
              multiline
              placeholder="Digite alguma coisa..."
              value={note}
              onChangeText={(t) => setNote(t)}
            />
          </>
        )}
      </Scroll>
    </Container>
  );
};

export default Note;
