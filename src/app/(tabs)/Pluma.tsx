import {
  PlumaBirdCard,
  PlumaIdentificator,
  PlumaIdentifying,
  PreviewImage,
  UploadZone,
} from "@/components";
import { plumaPickImage } from "@/helpers";
import { useGetHabitats } from "@/hooks/habitats/useGetHabitats";
import { useIdentifyBird } from "@/hooks/pluma";
import { Ihabitats } from "@/interfaces";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { plumaStylesheets } from "../styles/tabs";

export default function Pluma(): React.JSX.Element {
  const { data: habitatsData } = useGetHabitats();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const habitats = habitatsData.rows.map((r: Ihabitats) => {
    return r.name;
  });

  const {
    mutate: identify,
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
        {!imageUri ? (
          <UploadZone
            onGallery={() =>
              plumaPickImage({ setImageUri, setImageBase64, reset })
            }
          />
        ) : (
          <>
            <PreviewImage uri={imageUri} onReset={handleReset} />
            {!result && (
              <TouchableOpacity
                style={[
                  plumaStylesheets.btnAnalyze,
                  isPending && plumaStylesheets.btnDisabled,
                ]}
                onPress={() => imageBase64 && identify(imageBase64)}
                disabled={isPending}
                activeOpacity={0.85}
              >
                <PlumaIdentificator isPending={isPending} />
              </TouchableOpacity>
            )}

            <PlumaIdentifying isPending={isPending} error={error} />

            {result && (
              <PlumaBirdCard
                habitats={habitats}
                result={result}
                imageUri={imageUri}
                onReset={handleReset}
              />
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
