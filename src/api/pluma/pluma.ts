import { plumaPrompt } from "@/constants";
import { IPlumaResult } from "@/interfaces";

export async function identifyBird(
  base64: string,
  habitats: string[]
): Promise<IPlumaResult> {

  const url = "https://api.anthropic.com/v1/messages";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY ?? "",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: "image/jpeg",
                data: base64,
              },
            },
            { type: "text", text: plumaPrompt(habitats) },
          ],
        },
      ],
    }),
  });

  if (!response.ok) throw new Error(`Erro na API: ${response.status}`);

  const data = await response.json();
  const text: string =
    data.content?.map((b: any) => b.text ?? "").join("") ?? "";
  const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());

  if (parsed.erro) throw new Error(parsed.erro);
  return parsed as IPlumaResult;
}
