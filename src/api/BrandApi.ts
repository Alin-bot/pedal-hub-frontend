import { axiosClient } from "./Api";
import { IBrand } from "./model/Brand";

export interface IBrandService {
  getBrands(): Promise<{ data: IBrand[] }>;
  getBrandById(id: number): Promise<{ data: IBrand }>;
}

export class BrandServiceImpl implements IBrandService {
  public async getBrands(): Promise<{ data: IBrand[] }> {
    return axiosClient.get("/brands");
  }

  public async getBrandById(id: number): Promise<{ data: IBrand }> {
    return axiosClient.get(`/brands/${id}`);
  }
}
