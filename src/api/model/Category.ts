import { IBike } from "./Bike";

export interface ICategory {
  id: number;
  name: string;
  description: string;
  childCategories: string[];
  parentCategory: string;
  bikeList: IBike[];
}
