import { axiosClient } from "./Api";
import { IBike } from "./model/Bike";

export interface IBikeService {
  getBikes(): Promise<{ data: IBike[] }>;
  getBikeById(id: number): Promise<{ data: IBike }>;
  getBikesByBrandName(brandName: string): Promise<{ data: IBike[] }>;
  getBikesByCategoryAndYear(
    category: string,
    year: string
  ): Promise<{ data: IBike[] }>;
}

export class BikeServiceImpl implements IBikeService {
  public async getBikes(): Promise<{ data: IBike[] }> {
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
