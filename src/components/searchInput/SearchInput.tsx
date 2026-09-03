import { colors } from "@/themes";
import { Feather } from "@expo/vector-icons";
import { t } from "@lingui/core/macro";
import { StyleSheet, TextInput, View } from "react-native";

export function SearchInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}): React.JSX.Element {
  
  return (
    <View style={searchInputStylesheets.container}>
      <Feather name="search" size={27} color={colors.screens.searchInput.icon} />

      <TextInput
        placeholder={t`Buscar aves...`}
        value={search}
        onChangeText={(t) => setSearch(t)}
        placeholderTextColor={colors.palette.red600}
        style={searchInputStylesheets.input}
      />
    </View>
  );
}

export const searchInputStylesheets = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.screens.searchInput.background,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 50,
    gap: 8,
    marginTop: 10,
  },
  input: {
    color: colors.palette.red600,
    fontSize: 17,
    width: "100%",
    borderRadius: 30,
  },
});
