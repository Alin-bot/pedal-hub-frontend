import { axiosClient } from "./Api";
import { IBike } from "./model/IBike";
import { ISearchResponse } from "./model/Common";

export interface IBikeService {
  getBikes(): Promise<{ data: ISearchResponse<IBike> }>;
  getBikeById(id: number): Promise<{ data: IBike }>;
  getBikesByBrandName(brandName: string): Promise<{ data: IBike[] }>;
  getBikesByCategoryAndYear(
    category: string,
    year: string
  ): Promise<{ data: IBike[] }>;
  addBike(brand: IBike): Promise<{ data: IBike }>;
}

export class BikeServiceImpl implements IBikeService {
  public async getBikes(): Promise<{ data: ISearchResponse<IBike> }> {
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

  public async addBike(brand: IBike): Promise<{ data: IBike }> {
    return axiosClient.post("/bikes", brand);
  }
}
