import { plumaStylesheets } from "@/app/styles";
import { plumaPickImage } from "@/helpers";
import { IPlumaResult } from "@/interfaces";
import { UseMutateFunction } from "@tanstack/react-query";
import { TouchableOpacity } from "react-native";
import { PlumaBirdCard } from "./PlumaBirdCard";
import { PlumaIdentificator } from "./PlumaIdentificator";
import { PlumaIdentifying } from "./PlumaIdentifying";
import { PreviewImage } from "./PlumaPreviewImage";
import { UploadZone } from "./PlumaUploadZone";

export function PlumaContent({
  imageUri,
  imageBase64,
  identifyBird,
  setImageUri,
  setImageBase64,
  reset,
  handleReset,
  result,
  isPending,
  error,
  habitats,
}: {
  imageUri: string | null;
  imageBase64: string | null;
  identifyBird: UseMutateFunction<IPlumaResult, Error, string, unknown>;
  setImageUri: React.Dispatch<React.SetStateAction<string | null>>;
  setImageBase64: React.Dispatch<React.SetStateAction<string | null>>;
  reset: () => void;
  handleReset: () => void;
  result: IPlumaResult | undefined;
  isPending: boolean;
  error: Error | null;
  habitats: string[];
}) {
  return (
    <>
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
              onPress={() => imageBase64 && identifyBird(imageBase64)}
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
    </>
  );
}
