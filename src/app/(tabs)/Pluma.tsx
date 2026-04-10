import { PlumaContent } from "@/components";
import { useGetHabitats } from "@/hooks/habitats/useGetHabitats";
import { useIdentifyBird } from "@/hooks/pluma";
import { Ihabitats } from "@/interfaces";
import React, { useMemo, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { plumaStylesheets } from "../styles/tabs";

export default function Pluma(): React.JSX.Element {
  const { data: habitatsData } = useGetHabitats();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const habitats: string[] = useMemo(() => {
    return habitatsData.rows.map((r: Ihabitats) => {
      return r.name;
    });
  }, [habitatsData]);

  const {
    mutate: identifyBird,
    data: result,
    isPending,
    error,
    reset,
  } = useIdentifyBird(habitats);

  const handleReset = () => {
    setImageUri(null);
    setImageBase64(null);
    reset();
  };

  return (
    <SafeAreaView style={plumaStylesheets.safe}>
      <ScrollView
        style={plumaStylesheets.container}
        contentContainerStyle={plumaStylesheets.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={plumaStylesheets.title}>Identifique uma Ave aqui</Text>
        <PlumaContent
          imageUri={imageUri}
          imageBase64={imageBase64}
          identifyBird={identifyBird}
          setImageUri={setImageUri}
          setImageBase64={setImageBase64}
          reset={reset}
          handleReset={handleReset}
          result={result}
          isPending={isPending}
          error={error}
          habitats={habitats}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
