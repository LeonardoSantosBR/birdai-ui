export interface IBirdCardProps {
  name: string;
  scientificName: string;
  image: string;
  habitats: string[];
  onEdit?: () => void;
  onDelete?: () => void;
}
