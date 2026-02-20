import { pallete } from "@/themes/pallete";
import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { searchInputStylesheets } from "./searchInputStylesheets";

export default function SearchInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}): React.JSX.Element {
  return (
    <View style={searchInputStylesheets.container}>
      <Feather name="search" size={27} color="#999" />

      <TextInput
        placeholder="Buscar aves..."
        value={search}
        onChangeText={(t) => setSearch(t)}
        placeholderTextColor={pallete.tabBg}
        style={searchInputStylesheets.input}
      />
    </View>
  );
}
