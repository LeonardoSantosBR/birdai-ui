import CategoriesCard from "@/components/categoriesCard/CategoriesCard";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/catalog/CatalogTitle";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { indexStylesheets } from "./(tabs)_stylesheets";

export default function Catalog(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const categories = [
    "Urbano",
    "Floresta",
    "Litoral",
    "Pântano",
    "Deserto",
    "Ilha",
    "Costa"
  ];

  return (
    <View style={[indexStylesheets.container]}>
      <CatalogTitle />
      <SearchInput search={search} setSearch={setSearch} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 10 }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          {categories.map((item, index) => {
            const isSelected = selected.includes(item);

            return (
              <CategoriesCard
                key={index}
                item={item}
                setSelected={setSelected}
                isSelected={isSelected}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
