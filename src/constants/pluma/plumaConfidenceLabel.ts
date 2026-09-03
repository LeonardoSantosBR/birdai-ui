import { IPlumaResult } from "@/interfaces";

export const plumaConfidenceLabel: Record<IPlumaResult["confidence"], string> = {
  Alta: "Alta confiança",
  Média: "Confiança média",
  Baixa: "Baixa confiança",
};

export const plumaConfidenceColor: Record<IPlumaResult["confidence"], string> = {
  Alta: "#7C3AED",
  Média: "#D97706",
  Baixa: "#DC2626",
};