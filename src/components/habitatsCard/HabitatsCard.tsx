import { colors } from "@/themes";
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
    setSelected((prev) =>
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
        alignItems: "center",
        height: 35,
        backgroundColor: isSelected ? colors.mainPalette.color1 : colors.mainPalette.color3,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
      }}
    >
      <Text
        style={{
          color: colors.habitatsCard.text,
          fontWeight: "600",
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
}
