import { plumaStylesheets } from "@/app/styles/tabs";
import { plumaConfidenceColor, plumaConfidenceLabel } from "@/constants";
import { IPlumaResult } from "@/interfaces";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function PlumaBirdCard({
  habitats,
  result,
  imageUri,
  onReset,
}: {
  habitats: string[];
  result: IPlumaResult;
  imageUri: string;
  onReset: () => void;
}) {
  return (
    <View style={plumaStylesheets.resultCard}>
      <View>
        <Image
          source={{ uri: imageUri }}
          style={plumaStylesheets.resultImage}
          resizeMode="cover"
        />
        <View style={[plumaStylesheets.confidenceBadge, { backgroundColor: plumaConfidenceColor[result.confidence], borderRadius: 20 }]}>
          <Text style={plumaStylesheets.confidenceText}>
            {plumaConfidenceLabel[result.confidence]}
          </Text>
        </View>
      </View>

      <View style={plumaStylesheets.resultBody}>
        <Text style={plumaStylesheets.resultName}>{result.name}</Text>
        <Text style={plumaStylesheets.resultSci}>{result.cientific_name}</Text>

        <Text style={plumaStylesheets.sectionLabel}>Descrição</Text>
        <Text style={plumaStylesheets.resultDesc}>{result.description}</Text>

        <View style={plumaStylesheets.divider} />

        <Text style={plumaStylesheets.sectionLabel}>Habitats</Text>
        <View style={plumaStylesheets.chipsWrap}>
          {habitats.map((h) => (
            <View
              key={h}
              style={[
                plumaStylesheets.chip,
                result.habitats.includes(h) && plumaStylesheets.chipActive,
              ]}
            >
              <Text
                style={[
                  plumaStylesheets.chipText,
                  result.habitats.includes(h) &&
                    plumaStylesheets.chipTextActive,
                ]}
              >
                {h}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={plumaStylesheets.btnRetry} onPress={onReset}>
          <Text style={plumaStylesheets.btnRetryText}>Analisar outra ave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}