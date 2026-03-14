import { IhabitatItem } from "./IhabitatItem";

export interface IBirdCard {
  id: number;
  name: string;
  cientific_name: string;
  url: string;
  birdsHabitats: IhabitatItem[];
}