import { plumaPrompt } from "@/constants";
import { IPlumaResult } from "@/interfaces";
const GEMINI_MODEL = "gemini-3.8-flash";

export async function identifyBird(
  base64: string,
  habitats: string[]
): Promise<IPlumaResult> {
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) throw new Error("apiKey não está configurada.");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            { text: plumaPrompt(habitats) },
            {
              inline_data: {
                mime_type: "image/jpeg",
                data: base64,
              },
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            name: { type: "STRING" },
            cientific_name: { type: "STRING" },
            description: { type: "STRING" },
            habitats: { type: "ARRAY", items: { type: "STRING" } },
            confidence: {
              type: "STRING",
              enum: ["Alta", "Média", "Baixa"],
            },
            erro: { type: "STRING" },
          },
        },
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Erro na API Gemini (${response.status}): ${details}`);
  }

  const data = await response.json();
  const text: string =
    data.candidates?.[0]?.content?.parts
      ?.map((part: { text?: string }) => part.text ?? "")
      .join("") ?? "";

  if (!text) throw new Error("A API Gemini não retornou uma resposta.");

  const parsed = JSON.parse(text);
  if (parsed.erro) throw new Error(parsed.erro);
  parsed.habitats = Array.isArray(parsed.habitats) ? parsed.habitats : [];
  return parsed as IPlumaResult;
}
