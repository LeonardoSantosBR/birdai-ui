import { IPlumaResult } from "@/interfaces";

export const CONFIDENCE_LABEL: Record<IPlumaResult["confidence"], string> = {
  Alta: "Alta confiança",
  Média: "Confiança média",
  Baixa: "Baixa confiança",
};