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

export enum FrameMaterial {
  aluminum = "aluminum",
  carbon = "carbon",
  steel = "steel",
  titanium = "titanium",
}

export enum BrakeSystem {
  disc = "disc",
  rim = "rim",
}

export enum BrakesType {
  hydraulic = "hydraulic",
  mechanical = "mechanical",
}

export enum SuspensionType {
  full = "full",
  front = "front",
  rigid = "rigid",
}

export interface IBike extends BikeDTO {
  year: number;
  price: number;
  frameMaterial: FrameMaterial;
  brakeSystem: BrakeSystem;
  brakesType: BrakesType;
  suspensionType: SuspensionType;
  category: {
    id: number;
    name: string;
  };
  groupset: Groupset;
}

export type BikeDTO = {
  id: number;
  name: string;
  brandId: number;
};
