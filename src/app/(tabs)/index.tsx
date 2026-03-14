import BirdCard from "@/components/birdCard/BirdCard";
import CategoriesCard from "@/components/habitatsCard/HabitatsCard";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/catalog/CatalogTitle";
import { habitatsConstant } from "@/constants";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Catalog(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const birdsMock = [
    {
      id: 1,
      name: "Bem-te-vi",
      cientific_name: "Pitangus sulphuratus",
      image:
        "https://vuobzeynuqtjnrgeltmn.supabase.co/storage/v1/object/public/birdai/birds/ac789bcb-0f38-4c98-87cf-48829e69313d.jpg",
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
            return <BirdCard key={item.id} item={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export const indexStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
});

