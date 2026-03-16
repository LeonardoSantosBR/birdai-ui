import { IhabitatItem } from "./IhabitatItem";

export interface IBirdCard {
  id: number;
  url: string;
  name: string;
  cientific_name: string;
  description: string;
  created_at: string;
  birdsHabitats: IhabitatItem[];
}