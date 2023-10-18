export interface Category {
  id: number;
  name: string;
  description: string;
  childCategories: [];
  parentCategory: string;
}

export interface Groupset {
  id: number;
  name: string;
  make: string;
  type: string;
}

export interface IBike {
  id: number;
  name: string;
  year: number;
  price: number;
  frameMaterial: string;
  brakesType: string;
  suspensionType: string;
  category: Category;
  groupset: Groupset;
}
