import { axiosClient } from "./Api";
import { BikeDTO, IBike } from "./model/IBike";

export interface IBikeService {
  getBikes(): Promise<{ data: BikeDTO[] }>;
  getBikeById(id: number): Promise<{ data: IBike }>;
  getBikesByBrandName(brandName: string): Promise<{ data: IBike[] }>;
  getBikesByCategoryAndYear(
    category: string,
    year: string
  ): Promise<{ data: IBike[] }>;
}

export class BikeServiceImpl implements IBikeService {
  public async getBikes(): Promise<{ data: BikeDTO[] }> {
    return axiosClient.get("/bikes");
  }

  public async getBikeById(id: number): Promise<{ data: IBike }> {
    return axiosClient.get(`/bikes/${id}`);
  }

  public async getBikesByBrandName(
    brandName: string
  ): Promise<{ data: IBike[] }> {
    return axiosClient.get(`/bikes/brand/${brandName}`);
  }

  public async getBikesByCategoryAndYear(
    category: string,
    year: string
  ): Promise<{ data: IBike[] }> {
    return axiosClient.get(`/bikes/category/${category}/year/${year}`);
  }
}
