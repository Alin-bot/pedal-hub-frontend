import { axiosClient } from "./Api";
import { BrandDTO, IBrand } from "./model/IBrand";

export interface IBrandService {
  getBrands(): Promise<{ data: BrandDTO[] }>;
  getBrandById(id: number): Promise<{ data: IBrand }>;
  addBrand(brand: IBrand): Promise<{ data: IBrand }>;
}

export class BrandServiceImpl implements IBrandService {
  public async getBrands(): Promise<{ data: BrandDTO[] }> {
    return axiosClient.get("/brands");
  }

  public async getBrandById(id: number): Promise<{ data: IBrand }> {
    return axiosClient.get(`/brands/${id}`);
  }

  public async addBrand(brand: IBrand): Promise<{ data: IBrand }> {
    return axiosClient.post("/brands", brand);
  }
}
