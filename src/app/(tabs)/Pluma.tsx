import { useIdentifyBird } from '@/hooks/pluma';
import { IPlumaResult } from '@/interfaces';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
  ActivityIndicator, Alert,
  Image, ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { plumaStylesheets } from '../(tabs)_stylesheets';

// ─── Constantes ───────────────────────────────────────────────────────────────

const ALL_HABITATS = [
  'Oceano Aberto (Pelágico)', 'Lagos e Rios', 'Manguezais',
  'Montanhas/Alpes', 'Tundra', 'Savana', 'Floresta tropical',
  'Pântano', 'Urbano', 'Litoral', 'Ilha', 'Costa', 'Deserto',
] as const;

const CONFIDENCE_LABEL: Record<IPlumaResult['confidence'], string> = {
  Alta: 'Alta confiança',
  Média: 'Confiança média',
  Baixa: 'Baixa confiança',
};

// ─── Tela principal ───────────────────────────────────────────────────────────

export default function Pluma(): React.JSX.Element {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const { mutate: identify, data: result, isPending, error, reset } = useIdentifyBird();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos de acesso à galeria para identificar a ave.');
      return;
    }

    const picked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
      base64: true,
    });

    if (!picked.canceled && picked.assets[0]) {
      const asset = picked.assets[0];
      setImageUri(asset.uri);
      setImageBase64(asset.base64 ?? null);
      reset(); // limpa resultado anterior
    }
  };

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
        <Text style={plumaStylesheets.title}> Olá eu sou o Pluma, Assistente de descoberta</Text>
        {!imageUri ? (
          <UploadZone onGallery={pickImage} />
        ) : (
          <>
            <PreviewImage uri={imageUri} onReset={handleReset} />

            {!result && (
              <TouchableOpacity
                style={[plumaStylesheets.btnAnalyze, isPending && plumaStylesheets.btnDisabled]}
                onPress={() => imageBase64 && identify(imageBase64)}
                disabled={isPending}
                activeOpacity={0.85}
              >
                {isPending
                  ? <ActivityIndicator color="#fff" />
                  : <Text style={plumaStylesheets.btnAnalyzeText}>🔍  Identificar ave</Text>
                }
              </TouchableOpacity>
            )}

            {isPending && (
              <Text style={plumaStylesheets.loadingHint}>Analisando plumagem, bico e habitat…</Text>
            )}

            {error && (
              <View style={plumaStylesheets.errorCard}>
                <Text style={plumaStylesheets.errorText}>⚠ {(error as Error).message}</Text>
              </View>
            )}

            {result && (
              <BirdCard result={result} imageUri={imageUri} onReset={handleReset} />
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function UploadZone({ onGallery }: { onGallery: () => void }) {
  return (
    <View style={plumaStylesheets.uploadZone}>
      <Text style={plumaStylesheets.uploadEmoji}>🦩</Text>
      <Text style={plumaStylesheets.uploadTitle}>Envie uma foto da ave</Text>
      <Text style={plumaStylesheets.uploadSub}>
        Quanto mais nítida a foto, mais precisa a identificação
      </Text>
      <TouchableOpacity style={plumaStylesheets.btnOutline} onPress={onGallery} activeOpacity={0.8}>
        <Text style={plumaStylesheets.btnOutlineText}>🖼  Escolher da galeria</Text>
      </TouchableOpacity>
    </View>
  );
}

function PreviewImage({ uri, onReset }: { uri: string; onReset: () => void }) {
  return (
    <View style={plumaStylesheets.previewWrap}>
      <Image source={{ uri }} style={plumaStylesheets.previewImage} resizeMode="cover" />
      <TouchableOpacity style={plumaStylesheets.changeBtn} onPress={onReset} activeOpacity={0.8}>
        <Text style={plumaStylesheets.changeBtnText}>Trocar foto</Text>
      </TouchableOpacity>
    </View>
  );
}

function BirdCard({ result, imageUri, onReset }: {
  result: IPlumaResult;
  imageUri: string;
  onReset: () => void;
}) {
  return (
    <View style={plumaStylesheets.resultCard}>
      <View>
        <Image source={{ uri: imageUri }} style={plumaStylesheets.resultImage} resizeMode="cover" />
        <View style={plumaStylesheets.confidenceBadge}>
          <Text style={plumaStylesheets.confidenceText}>{CONFIDENCE_LABEL[result.confidence]}</Text>
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
          {ALL_HABITATS.map((h) => (
            <View key={h} style={[plumaStylesheets.chip, result.habitats.includes(h) && plumaStylesheets.chipActive]}>
              <Text style={[plumaStylesheets.chipText, result.habitats.includes(h) && plumaStylesheets.chipTextActive]}>
                {h}
              </Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={plumaStylesheets.btnAdd}
          activeOpacity={0.8}
          onPress={() => Alert.alert('✓ Ave adicionada ao catálogo!')}
        >
          <Text style={plumaStylesheets.btnAddText}>+ Adicionar ao catálogo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={plumaStylesheets.btnRetry} onPress={onReset}>
          <Text style={plumaStylesheets.btnRetryText}>Analisar outra ave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}