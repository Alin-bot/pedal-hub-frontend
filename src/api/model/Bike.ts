type Category = "enduro" | "crossCountry" | "trail" | "downhill";

export interface IBike {
  id: number;
  name: string;
  year: number;
  price: number;
  frameMaterial: string;
  brakesType: string;
  suspensionType: string;
  category: {
    id: number;
    name: string;
    description: string;
    childCategories: [];
    parentCategory: string;
  };
  groupset: {
    id: number;
    name: string;
    make: string;
    type: string;
  };
}
