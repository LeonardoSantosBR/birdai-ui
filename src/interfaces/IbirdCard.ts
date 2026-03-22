export interface IhabitatItem {
  habitat: { name: string; color: string };
}

export interface IBirdCard {
  id: number;
  url: string;
  name: string;
  cientific_name: string;
  description: string;
  created_at: string;
  birdsHabitats: IhabitatItem[];
}
