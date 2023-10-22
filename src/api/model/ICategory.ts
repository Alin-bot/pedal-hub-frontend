import { IBike } from "./IBike";

export interface ICategory {
  id: number;
  name: string;
  description: string;
  childCategories: string[];
  parentCategory: string;
  bikeList: IBike[];
}

export type CategoryDTO = {
  id: number;
  name: string;
};
