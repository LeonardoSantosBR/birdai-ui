import { addBirdStylesheets } from "@/app/(tabs)_stylesheets";
import { toggleHabitat } from "@/helpers";
import { IBirdForm } from "@/interfaces";
import { t } from "@lingui/core/macro";
import { Text, TouchableOpacity } from "react-native";

export function HabitatsOptions({
  has,
  id,
  setForm,
  color,
  name,
}: {
  has: boolean;
  id: number;
  setForm: React.Dispatch<React.SetStateAction<IBirdForm>>;
  color: string;
  name: string;
}) {
  return (
    <TouchableOpacity
      key={id}
      onPress={() => toggleHabitat(setForm, id)}
      style={[addBirdStylesheets.chip, has && { backgroundColor: color }]}
      activeOpacity={0.75}
    >
      <Text
        style={[
          addBirdStylesheets.chipText,
          has && addBirdStylesheets.chipTextSelected,
        ]}
      >
        {t`${name}`}
      </Text>
    </TouchableOpacity>
  );
}
