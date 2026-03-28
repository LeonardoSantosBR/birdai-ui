export interface IPlumaResult {
  name: string;
  cientific_name: string;
  description: string;
  habitats: string[];
  confidence: 'Alta' | 'Média' | 'Baixa';
}