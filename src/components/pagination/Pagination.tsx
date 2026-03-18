import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Pagination({
  currentPage,
  lastPage,
  setPage,
}: {
  currentPage: number;
  lastPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {

  function handlePreviusOrNextPage(type: "next" | "previous") {
    if (type === "next" && currentPage < lastPage) {
      setPage((prev) => prev + 1);
    }
    if (type === "previous" && currentPage > 1) {
      setPage((prev) => prev - 1);
    }
  }

  return (
    <View style={paginationStylesheets.paginationContainer}>
      <Text style={paginationStylesheets.paginationInfo}>Páginas</Text>

      <View style={paginationStylesheets.paginationButtons}>
        <TouchableOpacity
          style={[
            paginationStylesheets.pageButton,
            currentPage === 1 && paginationStylesheets.pageButtonDisabled,
          ]}
          onPress={() => handlePreviusOrNextPage("previous")}
          disabled={currentPage === 1}
        >
          <Feather name="chevron-left" size={22} color="#fff" />
        </TouchableOpacity>

        <Text style={paginationStylesheets.pageIndicator}>
          {currentPage} / {lastPage}
        </Text>

        <TouchableOpacity
          style={[
            paginationStylesheets.pageButton,
            currentPage === lastPage &&
              paginationStylesheets.pageButtonDisabled,
          ]}
          onPress={() => handlePreviusOrNextPage("next")}
          disabled={currentPage === lastPage}
        >
          <Feather name="chevron-right" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const paginationStylesheets = StyleSheet.create({
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
