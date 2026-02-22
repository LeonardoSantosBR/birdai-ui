import BirdCard from "@/components/birdCard/BirdCard";
import CategoriesCard from "@/components/habitatsCard/HabitatsCard";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/catalog/CatalogTitle";
import { habitatsConstant } from "@/constants";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { indexStylesheets } from "./(tabs)_stylesheets";

export default function Catalog(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const birdsMock = [
    {
      id: 1,
      name: "Bem-te-vi",
      scientificName: "Pitangus sulphuratus",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Bem-te-vi_REFON.jpg",
      habitats: ["Urbano", "Floresta", "Litoral"],
    }
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
          {habitatsConstant.map((item, index) => {
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

      <ScrollView style={{ width: "100%", height: "75%" }}>
        <View style={{ flexDirection: "column", gap: 10 }}>
          {birdsMock.map((item, index) => {

            return (
              <BirdCard
                key={item.id}
                item={item}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
