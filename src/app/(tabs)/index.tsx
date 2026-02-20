import { indexStylesheets } from "@/app/(tabs)/stylesheets/indexStylesheets";
import SearchInput from "@/components/searchInput/SearchInput";
import { Text, View } from "react-native";

export default function Catalog(): React.JSX.Element {
  return (
    <View style={[indexStylesheets.container]}>
      <Text style={[indexStylesheets.title]}>Catálogo</Text>
      <SearchInput />
    </View>
  );
}
