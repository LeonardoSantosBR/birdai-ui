import BirdCard from "@/components/birdCard/BirdCard";
import { BirdEmpty } from "@/components/birdEmpty";
import HabitatsCard from "@/components/habitatsCard/HabitatsCard";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination/Pagination";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/CatalogTitle";
import { useDebounce, useGetBirds } from "@/hooks";
import { useGetHabitats } from "@/hooks/habitats/useGetHabitats";
import { IBirdCard, Ihabitats } from "@/interfaces";
import { colors } from "@/themes";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

export default function Catalog(): React.JSX.Element {
  const [page, setPage] = useState(1);
  const limit = 5;
  const [search, setSearch] = useState("");
  const [habitatsSelected, setHabitatsSelected] = useState<number[]>([]);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const { data: birdsData, isLoading: isBirdsFetchLoading } = useGetBirds(
    page,
    limit,
    debouncedSearch,
    habitatsSelected
  );

  const { data: habitatsData } = useGetHabitats();

  const birds = birdsData?.rows ?? [];
  const habitats = habitatsData?.rows ?? [];
  const pagination = birdsData?.pagination;
  const currentPage = pagination?.page ?? 1;
  const lastPage = pagination?.lastPage ?? 1;

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
              {habitats?.map((item: Ihabitats, index: number) => {
                const isSelected = habitatsSelected.includes(item.id);
                return (
                  <HabitatsCard
                    key={index}
                    item={item}
                    setSelected={setHabitatsSelected}
                    isSelected={isSelected}
                  />
                );
              })}
            </ScrollView>
          </View>
        }
        ListEmptyComponent={
          isBirdsFetchLoading ? <LoadingSpinner /> : <BirdEmpty />
        }
        ListFooterComponent={
          !isBirdsFetchLoading && birds.length > 0 ? (
            <Pagination
              currentPage={currentPage}
              lastPage={lastPage}
              setPage={setPage}
            />
          ) : null
        }
      />
    </View>
  );
}

export const indexStylesheets = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    backgroundColor: colors.index.background,
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
    color: colors.index.emptyText,
  },
});
