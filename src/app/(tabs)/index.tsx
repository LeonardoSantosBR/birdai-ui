import BirdCard from "@/components/birdCard/BirdCard";
import { BirdNotFound } from "@/components/birdNotFound";
import CategoriesCard from "@/components/habitatsCard/HabitatsCard";
import { LoadingSpinner } from "@/components/loadingSpinner";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/CatalogTitle";
import { habitatsConstant } from "@/constants";
import { useGetBirds } from "@/hooks/birds/useGetBirds";
import { IBirdCard } from "@/interfaces";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

export default function Catalog(): React.JSX.Element {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const { data, isLoading } = useGetBirds(page, limit);
  const birds = data?.rows ?? [];

  return (
    <View style={indexStylesheets.container}>
      <FlatList
        data={birds}
        keyExtractor={(item: IBirdCard) => String(item.id)}
        renderItem={({ item }) => <BirdCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={indexStylesheets.listContent}
        ListHeaderComponent={
          <View>
            <CatalogTitle />
            <SearchInput search={search} setSearch={setSearch} />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={indexStylesheets.categoriesScroll}
              contentContainerStyle={indexStylesheets.categoriesContent}
            >
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
            </ScrollView>
          </View>
        }
        ListEmptyComponent={isLoading ? <LoadingSpinner /> : <BirdNotFound />}
      />
    </View>
  );
}

export const indexStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
  },
  categoriesScroll: {
    marginVertical: 10,
  },
  categoriesContent: {
    gap: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 120,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 16,
    color: "#666",
  },
});
