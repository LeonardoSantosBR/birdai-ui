import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { searchInputStylesheets } from "./searchInputStylesheets";

export default function SearchInput(): React.JSX.Element {
  const [search, setSearch] = useState("");

  return (
    <View style={searchInputStylesheets.container}>
      <Feather name="search" size={27} color="#999" />

      <TextInput
        placeholder="Buscar aves..."
        value={search}
        onChangeText={(t)=> setSearch(t)}
        placeholderTextColor="#999"
        style={searchInputStylesheets.input}
      />
    </View>
  );
}
