import BirdCard from "@/components/birdCard/BirdCard";
import { BirdEmpty } from "@/components/birdEmpty";
import HabitatsCard from "@/components/habitatsCard/HabitatsCard";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination/Pagination";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/CatalogTitle";
import { normalizePagination } from "@/helpers";
import { useDebounce, useGetBirds } from "@/hooks";
import { useGetHabitats } from "@/hooks/habitats/useGetHabitats";
import { useSetPage } from "@/hooks/useSetPage";
import { IBirdCard, Ihabitats } from "@/interfaces";
import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { indexStylesheets } from "../(tabs)_stylesheets";

export default function Catalog(): React.JSX.Element {
  const [page, setPage] = useState(1);
  const limit = 5;
  const [search, setSearch] = useState("");
  const [habitatsSelected, setHabitatsSelected] = useState<number[]>([]);
  const debouncedSearch = useDebounce(search, 500);
  useSetPage(setPage, [debouncedSearch, JSON.stringify(habitatsSelected)]);

  const { data: birdsData, isLoading: isBirdsFetchLoading } = useGetBirds(
    page,
    limit,
    debouncedSearch,
    habitatsSelected
  );
  
  const { data: habitatsData } = useGetHabitats();

  const {
    rows: birds,
    currentPage,
    lastPage,
  } = normalizePagination<IBirdCard>(birdsData);

  const { rows: habitats } = normalizePagination<Ihabitats>(habitatsData);

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
