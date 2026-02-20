import SearchInput from "@/components/searchInput/SearchInput";
import { Text, View } from "react-native";
import { catalogStylesheets } from "./stylesheets/catalogStylesheets";

export default function Catalog(): React.JSX.Element {
  return <View style={[catalogStylesheets.container]}>
    <Text style={[catalogStylesheets.title]}>Catálogo</Text>
    <SearchInput />
  </View>;
}