import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function HabitatsCard({
  item,
  setSelected,
  isSelected,
}: {
  item: string;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  isSelected: boolean;
}): React.JSX.Element {

  function toggleCategory(category: string) {
    setSelected(
      (prev) =>
        prev.includes(category)
          ? prev.filter((item) => item !== category)
          : [...prev, category]
    );
  }

  return (
    <TouchableOpacity
      onPress={() => toggleCategory(item)}
      style={{
        flex: 1,
        alignItems: 'center',
        height: 35,
        backgroundColor: isSelected ? "#ff3b30" : "#e5e5e5",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
      }}
    >
      <Text
        style={{
          color: "#333",
          fontWeight: "600",
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
}
