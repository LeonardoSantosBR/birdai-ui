import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/catalog/CatalogTitle";
import { View } from "react-native";
import { indexStylesheets } from "./stylesheets";

export default function Catalog(): React.JSX.Element {
  return (
    <View style={[indexStylesheets.container]}>
      <CatalogTitle />
      <SearchInput />
    </View>
  );
}
