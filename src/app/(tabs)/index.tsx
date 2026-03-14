import BirdCard from "@/components/birdCard/BirdCard";
import CategoriesCard from "@/components/habitatsCard/HabitatsCard";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/catalog/CatalogTitle";
import { habitatsConstant } from "@/constants";
import { useGetBirds } from "@/hooks/birds/useGetBirds";
import { IBirdCard } from "@/interfaces";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Catalog(): React.JSX.Element {
  const [page, setPage] = useState(1);
  const limit = 5;
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const { data , isLoading } = useGetBirds(page, limit);

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
          {isLoading ? (
            <Text>Carregando...</Text>
          ) : (
            data.rows.map((item: IBirdCard) => <BirdCard key={item.id} data={item} />)
          )}
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
