import { IBike } from "./IBike";

export interface IBrand {
  id: number;
  name: string;
  country: string;
  logo: string;
  description: string;
  bikeList: IBike[];
}

export type BrandDTO = {
  id: number;
  name: string;
};
