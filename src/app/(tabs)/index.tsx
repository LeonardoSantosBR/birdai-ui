import { indexStylesheets } from "@/app/(tabs)/stylesheets/indexStylesheets";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/catalog/CatalogTitle";
import { View } from "react-native";

export default function Catalog(): React.JSX.Element {
  return (
    <View style={[indexStylesheets.container]}>
      <CatalogTitle />
      <SearchInput />
    </View>
  );
}
