import BirdCard from "@/components/birdCard/BirdCard";
import { BirdEmpty } from "@/components/birdEmpty";
import CategoriesCard from "@/components/habitatsCard/HabitatsCard";
import { LoadingSpinner } from "@/components/loadingSpinner";
import SearchInput from "@/components/searchInput/SearchInput";
import CatalogTitle from "@/components/titles/CatalogTitle";
import { habitatsConstant } from "@/constants";
import { useGetBirds } from "@/hooks/birds/useGetBirds";
import { IBirdCard } from "@/interfaces";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Catalog(): React.JSX.Element {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const { data, isLoading } = useGetBirds(page, limit);

  const birds = data?.rows ?? [];
  const pagination = data?.pagination;
  const currentPage = pagination?.page ?? 1;
  const lastPage = pagination?.lastPage ?? 1;

  function handleNextPage() {
    if (currentPage < lastPage) {
      setPage((prev) => prev + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setPage((prev) => prev - 1);
    }
  }

  function handleChangeLimit(value: number) {
    setLimit(value);
    setPage(1);
  }

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
        ListEmptyComponent={isLoading ? <LoadingSpinner /> : <BirdEmpty />}
        ListFooterComponent={
          !isLoading && birds.length > 0 ? (
            <View style={indexStylesheets.paginationContainer}>
              <Text style={indexStylesheets.paginationInfo}>
                Páginas
              </Text>

              <View style={indexStylesheets.paginationButtons}>
                <TouchableOpacity
                  style={[
                    indexStylesheets.pageButton,
                    currentPage === 1 && indexStylesheets.pageButtonDisabled,
                  ]}
                  onPress={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <Feather name="chevron-left" size={22} color="#fff" />
                </TouchableOpacity>

                <Text style={indexStylesheets.pageIndicator}>
                  {currentPage} / {lastPage}
                </Text>

                <TouchableOpacity
                  style={[
                    indexStylesheets.pageButton,
                    currentPage === lastPage &&
                      indexStylesheets.pageButtonDisabled,
                  ]}
                  onPress={handleNextPage}
                  disabled={currentPage === lastPage}
                >
                  <Feather name="chevron-right" size={22} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
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
  paginationContainer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    alignItems: "center",
    gap: 12,
  },
  paginationInfo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  paginationButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  pageButton: {
    backgroundColor: "#e53935",
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pageButtonDisabled: {
    backgroundColor: "#f3a6a4",
  },
  pageIndicator: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
