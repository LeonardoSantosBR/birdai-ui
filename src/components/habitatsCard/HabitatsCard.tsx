import { Ihabitats } from "@/interfaces";
import { colors } from "@/themes";
import { t } from "@lingui/core/macro";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export function HabitatsCard({
  item,
  setSelected,
  isSelected,
}: {
  item: Ihabitats;
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
  isSelected: boolean;
}): React.JSX.Element {
  function toggleCategory(id: number) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return (
    <TouchableOpacity
      onPress={() => toggleCategory(item.id)}
      style={{
        flex: 1,
        alignItems: "center",
        height: 35,
        backgroundColor: isSelected
          ? colors.habitatsCard.selected
          : colors.mainPalette.white,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "sans-serif-medium",
          color: colors.habitatsCard.text,
          fontWeight: "600",
        }}
      >
        {t`${item.name}`}
      </Text>
    </TouchableOpacity>
  );
}
