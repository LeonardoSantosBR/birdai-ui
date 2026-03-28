const HABITATS = [
  'Oceano Aberto (Pelágico)', 'Lagos e Rios', 'Manguezais',
  'Montanhas/Alpes', 'Tundra', 'Savana', 'Floresta tropical',
  'Pântano', 'Urbano', 'Litoral', 'Ilha', 'Costa', 'Deserto',
] as const;

export const PlumaPrompt = `Você é um ornitólogo especialista. Analise esta imagem de ave e responda APENAS com um objeto JSON válido, sem markdown, sem explicações.

Formato exato:
{
  "name": "nome popular em português",
  "cientific_name": "Genus species",
  "description": "descrição rica em 2-3 frases sobre aparência, comportamento e curiosidades",
  "habitats": ["apenas itens desta lista exata"],
  "confidence": "Alta" ou "Média" ou "Baixa"
}

Lista de habitats permitidos (use apenas estes, exatamente como escritos):
${HABITATS.join(", ")}

Se não for uma ave, retorne: {"erro": "Nenhuma ave identificada na imagem."}`;
