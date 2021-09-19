import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const api = ["Valcinei", "Carlos", "Paula", "Valdeci", "Lunara"];
  const [list, setList] = useState(api);
  const [searchText, setSearchText] = useState("");
  const handleOrderClick = () => {
    let newList = [...api];

    newList.sort((item, next) => (item > next ? 1 : next > item ? -1 : 0));

    setList(newList);
  };

  useEffect(() => {
    if (searchText === "") {
      setList(api);
    } else {
      setList(
        api.filter(
          (item) => item.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleOrderClick}>
        <Text>Order LUL</Text>
      </TouchableOpacity>

      <TextInput
        value={searchText}
        onChangeText={(t) => setSearchText(t)}
        style={styles.input}
      />
      <FlatList
        keyExtractor={(item) => item.toString()}
        data={list}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  input: {
    backgroundColor: "#eee",
    height: 40,
    width: 200,
    color: "#333",
  },
});
