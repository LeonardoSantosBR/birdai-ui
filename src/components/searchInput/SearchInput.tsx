import { colors } from "@/themes";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}): React.JSX.Element {
  
  return (
    <View style={searchInputStylesheets.container}>
      <Feather name="search" size={27} color={colors.searchInput.icon} />

      <TextInput
        placeholder="Buscar aves..."
        value={search}
        onChangeText={(t) => setSearch(t)}
        placeholderTextColor={colors.mainPalette.color1}
        style={searchInputStylesheets.input}
      />
    </View>
  );
}

export const searchInputStylesheets = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.searchInput.background,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 50,
    gap: 8,
    marginTop: 10,
  },
  input: {
    color: colors.mainPalette.color1,
    fontSize: 17,
    width: "100%",
    borderRadius: 30,
  },
});
