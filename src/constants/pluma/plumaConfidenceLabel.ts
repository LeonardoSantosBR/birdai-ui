import { IPlumaResult } from "@/interfaces";

export const plumaConfidenceLabel: Record<IPlumaResult["confidence"], string> = {
  Alta: "Alta confiança",
  Média: "Confiança média",
  Baixa: "Baixa confiança",
};