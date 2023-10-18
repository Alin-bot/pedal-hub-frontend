import { axiosClient } from "./Api";
import { IBike } from "./model/Bike";

export interface IBikeService {
  getBikes(): Promise<{ data: IBike[] }>;
  getBikeById(id: string): Promise<{ data: IBike }>;
}

export class BikeServiceImpl implements IBikeService {
  public async getBikes(): Promise<{ data: IBike[] }> {
    return axiosClient.get("/bikes");
  }

  public async getBikeById(id: string): Promise<{ data: IBike }> {
    return axiosClient.get(`/bikes/${id}`);
  }
}
